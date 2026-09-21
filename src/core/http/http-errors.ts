export class HttpError extends Error {
  readonly status: number;
  readonly details?: unknown;

  constructor(message: string, status: number, details?: unknown) {
    super(message);
    this.name = "HttpError";
    this.status = status;
    this.details = details;
  }
}

export class NotFoundError extends HttpError {
  constructor(message = "Recurso não encontrado", details?: unknown) {
    super(message, 404, details);
    this.name = "NotFoundError";
  }
}

export class NetworkError extends HttpError {
  constructor(message = "Falha de conexão com o servidor") {
    super(message, 0);
    this.name = "NetworkError";
  }
}
