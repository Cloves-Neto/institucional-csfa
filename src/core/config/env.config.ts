/**
 * Configurações de ambiente do site institucional CSFA.
 */
export const envConfig = {
  api: {
    baseURL: import.meta.env.VITE_API_URL ?? import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080",
    timeoutMs: Number(import.meta.env.VITE_API_TIMEOUT ?? 15000),
  },
} as const;

export type EnvConfig = typeof envConfig;
