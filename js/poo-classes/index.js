class Produto{

    // método construtor é o método que é chamado pela 1ª vez toda vez
    constructor(){
        this.id = 0;
        this.nome = '',
        this.valor = 0;
    }

    adicionar(){console.log('adicionado!')}
    deletar(){console.log('deletado!')}
}

// criando um obj e atribuindo na var:
var produto = new Produto()