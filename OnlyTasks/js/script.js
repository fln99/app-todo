let inputTarefa = document.querySelector('.inTaskId');
let botaoAdicionarTarefa = document.querySelector('#botao-add');
let mensagemInicial = document.querySelector('.msg-initial');
let listaNaoOrdenada = document.querySelector('.ul-taskList');

let arrayTarefas = [];

botaoAdicionarTarefa.addEventListener('click', adicionarTarefa);

function controleDaMensagem() {
    if (arrayTarefas.length > 0) {
        mensagemInicial.classList.add('hide');
    } else {
        mensagemInicial.classList.remove('hide');
    }
}

function adicionarTarefa() {
    if (inputTarefa.value.length == 0) {
        alert("[ERRO] - Adicione uma tarefa!");

    } else if (arrayTarefas.length > 6){
        alert("[ATENÇÃO] - Limite de tarefas excedido!");

    } else {
        arrayTarefas.push(String(inputTarefa.value));

        renderizarListaTarefas();

        controleDaMensagem();
    }

    inputTarefa.value = '';
}

function renderizarListaTarefas() {
    listaNaoOrdenada.innerHTML = '';

    for(tarefa of arrayTarefas) {
        let indiceTarefa = arrayTarefas.indexOf(tarefa);

        let itemDaLista = document.createElement('li');
        itemDaLista.setAttribute('class', 'itemList-tarefa');
        let textoItemDaLista = document.createTextNode(tarefa);

        itemDaLista.appendChild(textoItemDaLista);

        let elementoLink = document.createElement('a');
        elementoLink.setAttribute('href', '#');
        let textoElementoLink = document.createTextNode("Excluir");
        elementoLink.setAttribute('onclick', 'removerTarefa('+ indiceTarefa +')');

        elementoLink.appendChild(textoElementoLink);
        itemDaLista.appendChild(elementoLink);
        listaNaoOrdenada.appendChild(itemDaLista);
    }
}

function removerTarefa(t) {
    arrayTarefas.splice(t, 1);

    renderizarListaTarefas();

    controleDaMensagem();
}