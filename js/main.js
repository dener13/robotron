const controle = document.querySelectorAll('[data-controle]') //busca todos os botoes com a classe de data-controle de ajuste que tem os operadores + & -
const estatistica = document.querySelectorAll('[data-estatistica]')

//objeto pecas que recebe os itens que tambem sao objetos com suas declarações de estatisticas
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


//para cada elemento do controle é adicionado um evento com uma função pra manipular os dados
controle.forEach( (elemento)=> //é criado um parametro elemento para poder trabalhar o evento para cada elemento
{ 
    elemento.addEventListener('click', (evento)=> //evento de click e uma função vazia com parametro pra poder manipular os dados
    { 
          manipulaDados(evento.target.dataset.controle, evento.target.parentNode) //função que acessa o data-controle
          atualizaEstatisticas(evento.target.dataset.peca) //acessa o data-set peca atraves da funcao atualizaEstatistica
    })
})


//parametro operacao para trabalhar os operadores / parametro controle para poder acessar o data-contador
function manipulaDados(operacao, controle)
{
    const peca = controle.querySelector('[data-contador]') //a variavel piece recebe todos os elementos com o seletor [data-contador]
    
    
    //se o textContent == '-' os piece recebem um decremento na hora que for clicado
    if(operacao === '-')
    { 
        peca.value = parseInt(peca.value) - 1; //o valor é um texto entao tem que converter pra int
    }

    //caso contrario ('+') recebe o incremento
    else
    {
        peca.value = parseInt(peca.value) + 1; //o valor é um texto entao tem que converter pra int
    }
}


function atualizaEstatisticas(peca)
{
    //para cada objeto que contenha o data-estatistica
    estatistica.forEach( (elemento) => 
    {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}
    

