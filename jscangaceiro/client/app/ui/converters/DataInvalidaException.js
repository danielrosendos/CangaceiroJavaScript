class DataInvalidaException extends Error {

    constructor() {
        super('A Data deve estar no formato dd/mm/aaaa');
    }

}