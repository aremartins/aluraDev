const todosOsProjetos = document.querySelector('.js-todos-projetos');



new function (){
  mostraProjetos()
}



function mostraProjetos() {
  if(localStorage.length == 0) {
    return
  }
  let projetos = []
  for(let i = 0; i < localStorage.length; i++) {
    projetos.push(JSON.parse(localStorage.getItem(i)))
    console.log(projetos)
  }
  projetos.forEach(projeto => {    
    todosOsProjetos.innerHTML += montaCartao(projeto)
    const codeHTML = todosOsProjetos.querySelector(`[data-id="${projeto.id}"]`)
    codeHTML.classList.add('main__content')
    const contentColor = codeHTML.querySelector('.main__content-color');
    contentColor.style.background = projeto.detalhesDoProjeto.color;
    codeHTML.querySelector('code').innerText = projeto.detalhesDoProjeto.codigo
    
    // cor = document.querySelector('.main__content-color')
    // cor.style.background = `${projeto.detalhesDoProjeto.color}` 
    // const codigoHtml = todosOsProjetos.querySelector(`[data-id="${projeto.id}"]`) 
    // codigoHtml.querySelector('code').innerText = projeto.detalhesDoProjeto.codigo
               
  })
  
}


function montaCartao(projeto) {  
  console.log(projeto)
  
  let cartao = 
  
  ` 
  <div class="project-wrapper" data-id="${projeto.id}">
        <div class="main__content-color ${projeto.detalhesDoProjeto.color}">
      <div class="main__content-code">              
        <code class="preview hljs ${projeto.detalhesDoProjeto.language}">
          <div class="mac-icons">
            <div class="icon-1"></div>
            <div class="icon-2"></div>
            <div class="icon-3"></div>
          </div><br>&nbsp${projeto.detalhesDoProjeto.codigo}
        </code>
      </div>
    </div> 
    <div class="main__info">
        <h1 class="title__project">${projeto.detalhesDoProjeto.nomeDoProjeto}</h1>
        <p class="description__project">${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>
        <div class="main__interactions">
            <div class="emojis">
                <i class="fas fa-heart" id="heart"></i><p>0</p>
                <i class="fas fa-comment"></i><p>0</p>
            </div>
            <div class="user">
                <span class="user__pic"></span>
                <p class="user__name">Harry</p>
            </div>
        </div>
    </div>
</div>

      
  `
    return cartao
}



document.querySelectorAll('.main__content').forEach(selectContent => {
  selectContent.addEventListener('mouseenter', event => {
      const interactions = selectContent.querySelector('.main__interactions')
      interactions.classList.toggle('active')
      selectContent.classList.toggle('active')
})
})

document.querySelectorAll('.main__content').forEach(selectContent => {
  selectContent.addEventListener('mouseleave', event => {
      const interactions = selectContent.querySelector('.main__interactions')
      interactions.classList.toggle('active')
      selectContent.classList.toggle('active')
})
})

document.querySelectorAll('.emojis').forEach(selectHeart => {
  selectHeart.addEventListener('click', event => {
      const svg = selectHeart.querySelector('i');
      svg.style.color = '#F65151';
      acrescentar(count);
      function acrescentar(count) {
          const btnHeart = selectHeart.querySelector('p');
          count++;
          btnHeart.innerHTML = count

      }
})
var count = 0;
})


document.querySelectorAll('.emojis').forEach(selectHeart => {
  selectHeart.addEventListener('dblclick', event => {
      const svg = selectHeart.querySelector('i');
      svg.style.color = 'white';
      const estado = 'false'
      decrementar(count);
      function decrementar(count) {
          const btnHeart = selectHeart.querySelector('p');
          count--;
          btnHeart.innerHTML = count
      }
})
var count = 1;
})