import { ApplicationException } from '../../util/ApplicationException.js';

export class DataInvalidaException extends ApplicationException {

    constructor() {
        super('A Data deve estar no formato dd/mm/aaaa');
    }

}