class Negociacao{

    constructor(_data, _quantidade, _valor) {

        Object.assign(this, { _quantidade, _valor});
        this._data = new Date(_data.getTime()),
        Object.freeze(this);

    }

    getVolume() {
        return this._quantidade * this._valor;
    }

    getData() {
        return new Date(this._data.getTime());
    }

    getQuantidade() {
        return this._quantidade;
    }

    getValor() {
        return this._valor;
    }

}