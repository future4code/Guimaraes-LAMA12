export abstract class BaseError extends Error {
    constructor(message: string, public code: number) {
      super(message);
    }
  }
  

  export class InvalidEmail extends BaseError {
    constructor(){
      super("Email inválido", 400)
    }
  }

  export class UnauthorizedUser extends BaseError {
    constructor(message: string){
      super(message, 400)
    }
  }

  export class InvalidPassword extends BaseError {
    constructor(){
      super("Senha inválida", 400)
    }
  }

  export class InvalidInput extends BaseError {
    constructor(message: string){
      super(message, 400)
    }
  }

