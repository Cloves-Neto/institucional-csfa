# ==============================================================================
# STAGE 1: Base Dependencies
# ==============================================================================
FROM node:22-alpine AS base

WORKDIR /app

COPY package*.json ./
RUN npm install

# ==============================================================================
# STAGE 2: Development (Vite Dev Server com HMR)
# ==============================================================================
FROM base AS development

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "4000"]

# ==============================================================================
# STAGE 3: Build Estático para Produção
# ==============================================================================
FROM base AS build

COPY . .

ARG VITE_API_URL=https://api.colsaofrancisco.com.br
ARG VITE_API_BASE_URL=https://api.colsaofrancisco.com.br
ARG VITE_API_TIMEOUT=15000
ARG VITE_CMS_URL=https://cms.colsaofrancisco.com.br/login

ENV VITE_API_URL=$VITE_API_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_API_TIMEOUT=$VITE_API_TIMEOUT
ENV VITE_CMS_URL=$VITE_CMS_URL

RUN npm run build

# ==============================================================================
# STAGE 4: Production (Nginx servindo o build estático)
# ==============================================================================
FROM nginx:stable-alpine AS production

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
