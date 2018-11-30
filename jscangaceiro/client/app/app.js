//criou a instancia do controller
const controller = new NegociacaoController();

//associa o evento de submissao do formulário á chamada do método "adicionar"

document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));

document
    .querySelector('#botao-apaga')
    .addEventListener('click', controller.apaga.bind(controller));