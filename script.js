/* Nesta aula vamos revisar o conteúdo que vimos até aqui de DOM e aprenderemos uma nova forma de 
lidar com objetos chamada de foreach */

/* Inicializando lista de convidados com dois convidados */
let listaDeConvidados = ['Cleyton', 'Dimas']

/* Identificando IDS que serão manipulados na tela */
let tabelaListaConvidados = document.getElementById('lista-convidados')

/* Função que insere registro a registro de usuário na lista (dentro da tabela do HTML) */
function insereConvidadoNoHTML (convidado) {
// Inserindo no HTML da tabela
  tabelaListaConvidados.innerHTML = `
    <tr>
        <td>${convidado}</td>
        <td><button type="button" class="btn btn-danger" name='botao-remover'>
            Remover
            </button>
        </td>
    </tr>
    `
}

/* Função que vai exibir os usuários no HTML quando chamada */
function exibeListaDeConvidados (lista) {
  // Percorrendo a lista pré-criada
  for (const convidado of lista) {
    // Chamando a função para inserir o convidado no html
    insereConvidadoNoHTML(convidado)
    // Console para investigação
    // console.log(convidado)
  }
}

exibeListaDeConvidados(listaDeConvidados)
