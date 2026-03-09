// Domain error base class
export class DomainError extends Error {
  constructor(
    public readonly code: string,
    message: string
  ) {
    super(message);
    this.name = "DomainError";
  }
}

export class InvalidCardError extends DomainError {
  constructor(message = "Card number is not recognized.") {
    super("INVALID_CARD", message);
  }
}

export class InvalidBinError extends DomainError {
  constructor(message = "BIN information not found.") {
    super("INVALID_BIN", message);
  }
}

export class DuplicateOrderError extends DomainError {
  constructor(message = "Order ID already exists.") {
    super("DUPLICATE_ORDER", message);
  }
}

export class InvalidStateError extends DomainError {
  constructor(message: string) {
    super("INVALID_STATE", message);
  }
}

export class UnauthorizedError extends DomainError {
  constructor(message = "Unauthorized.") {
    super("UNAUTHORIZED", message);
  }
}

export class NotFoundError extends DomainError {
  constructor(message = "Resource not found.") {
    super("NOT_FOUND", message);
  }
}
