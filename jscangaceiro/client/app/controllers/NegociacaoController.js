class NegociacaoController {

    constructor() {

        //a ideia é q $ seja o queryselector
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event) {
        //cancelando a submissão do formulário
        event.preventDefault();

        let negociacao = new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        console.log(negociacao);

        let diaMesAno = DateConverter.paraTexto(negociacao.data);

        console.log(diaMesAno);
    
    }

}