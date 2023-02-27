/* Nesta aula vamos revisar o conteúdo que vimos até aqui de DOM e aprenderemos uma nova forma de 
lidar com objetos chamada de foreach */

/* Inicializando lista de convidados com dois convidados */
let listaDeConvidados = ['Cleyton', 'Dimas']

/* Identificando IDS que serão manipulados na tela */
let tabelaListaConvidados = document.getElementById('lista-convidados')
let inputNomeConvidado = document.querySelector('#nome-convidado')
/* Dessa forma retorna um HTML collection */
// let botaoIncluirConvidado = document.getElementsByClassName('btn-primary')
let botaoIncluirConvidado = document.getElementById('botao-incluir')
let divMensagemUsuario = document.getElementById('mensagem-usuario')

/* Função que insere registro a registro de usuário na lista (dentro da tabela do HTML) */
function insereConvidadoNoHTML (convidado) {
  // Inserindo no HTML da tabela
  tabelaListaConvidados.innerHTML += `
    <tr>
        <td>${convidado}</td>
        <td><button type="button" class="btn btn-danger" name='botao-remover'>
            Remover
            </button>
        </td>
    </tr>
    `
}

/* Função que vai exibir os usuários no HTML quando chamada 1.0 Quando eu não manjo do foreach*/
function exibeListaDeConvidados (lista) {
  // Dando descarga no meu vaso
  tabelaListaConvidados.innerHTML = ''
  // Percorrendo a lista pré-criada
  for (const convidado of lista) {
    // Chamando a função para inserir o convidado no html
    insereConvidadoNoHTML(convidado)
    // Console para investigação
    // console.log(convidado)
  }
}

/* Usando foreach para percorrer um array */ 
function exibeListaDeConvidadosV2 () {
    // Limpo a tabela HTML
    tabelaListaConvidados.innerHTML = ''
    // Percorro o array inserindo cada posição em um elemento do HTML (TR) na table
    listaDeConvidados.forEach(convidado => insereConvidadoNoHTML(convidado))
}

/* Setando um atributo para esconder*/
function fechaDivMensagemUsuario(){
    divMensagemUsuario.setAttribute('hidden','')
}

exibeListaDeConvidadosV2(listaDeConvidados)

/* Escutando o evento de click para disparar uma função quando ele acontecer */
botaoIncluirConvidado.onclick = function(){
    if(inputNomeConvidado.value.trim()){
        listaDeConvidados.push(inputNomeConvidado.value)
        exibeListaDeConvidadosV2(listaDeConvidados)
        inputNomeConvidado.value = ''
        divMensagemUsuario.removeAttribute('hidden')
        // Confiro se to fazendo cagada ou não
        console.log(listaDeConvidados)
    }else{
        // Exemplo de getAttribute
        console.log(divMensagemUsuario.getAttribute('class'))
    }
    console.log('A treta ta on!')
}
