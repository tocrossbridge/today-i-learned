class Produto{

    // método construtor é o método que é chamado pela 1ª vez toda vez
    constructor(){
        this.id = 1;
        this.arrayProdutos = [];
    }
    salvar(){
        let produto = this.lerDados();
        if(this.validaCampos(produto)){
            this.adicionarProduto(produto)
            this.cancelar()
        }
        this.mostrarProdutos()
    }
    lerDados(){
        let produto = {}
        
        produto.id = this.id;
        produto.nome = document.getElementById('produto').value
        produto.valor = document.getElementById('valor').value

        return produto
    }
    adicionarProduto(produto){
        this.arrayProdutos.push(produto)
        this.id++
    }
    validaCampos(produto){
        let msg = '';
        if(produto.nome == '' || produto.valor == ''){
            msg += 'Preencha todos os campos!'
        }
        if(msg != ''){
            alert(msg)
            return false
        }
        return true
    }
    editar(){
        console.log('editado!')
    }
    cancelar(){
        document.getElementById('produto').value = ''
        document.getElementById('valor').value = ''
    }
    deletar(){
        console.log('deletado!')
    }
    mostrarProdutos(){
        const ul = document.getElementById('listaProdutos');
        const li = document.createElement('li');

        const spanEdit = document.createElement('span');
        spanEdit.appendChild( document.createTextNode('Editar') );
        spanEdit.setAttribute('onclick', 'produto.editar()');

        const spanDelete = document.createElement('span');
        spanDelete.appendChild( document.createTextNode('Excluir') );
        spanDelete.setAttribute('onclick', 'produto.deletar()');

        for(var i = 0, produto; produto = this.arrayProdutos[i++];){
            let conteudo = `${produto.nome} - ${produto.valor} - `
            li.textContent = conteudo
            li.appendChild(spanEdit)
            li.appendChild(spanDelete)
            ul.appendChild(li)
        }
    }
}

// criando um obj e atribuindo na var:
var produto = new Produto()