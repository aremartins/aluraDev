const botaoSalvar = document.querySelector('#salvar');
const colorProject = document.querySelector('#colorInput');
const projectTitle = document.querySelector('#name');
const projectDesc = document.querySelector('#description');

botaoSalvar.addEventListener('click', () => {
  if (typeof Storage != 'undefined') {
    console.log('suporta');
    const projeto = montaProjeto();
    salvaLocalStorage(projeto);
  } else {
    console.log('não suporta LocalStorage');
  }
  window.location.href = 'community.html';
});

function montaProjeto() {
  let projeto = {
    id: atribuiId(),
    detalhesDoProjeto: {
      color: colorProject.value,
      nomeDoProjeto: projectTitle.value,
      descricaoDoProjeto: projectDesc.value,
      language: language.value,
      codigo: areaDoCode.querySelector('code').innerText,
    },
  };
  return projeto;
}

function atribuiId() {
  if (localStorage == 0) {
    return 0;
  } else {
    let novoId = localStorage.length;
    return novoId;
  }
}

function salvaLocalStorage(objetoJson) {
  localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson));
}
