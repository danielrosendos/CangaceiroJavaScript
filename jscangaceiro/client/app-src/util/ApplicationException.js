export class ApplicationException extends Error {
    constructor(msg = '') {
        super(msg);
        this.name = this.constructor.name;
    }
}

const exception = ApplicationException;

export function isApplicationException(err) {
    return err instanceof exception ||
        Object.getPrototypeOf(err) instanceof exception
}

export function getExceptionMessage(err) {
    if(isApplicationException(err)){
        return err.message;
    } else {
        console.log(err);
        return 'Não Foi Possível Realizar a Opereação.';
    }
}