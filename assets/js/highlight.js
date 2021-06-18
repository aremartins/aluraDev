const areaDoCode = document.querySelector('.codigo-wrapper');
const button = document.querySelector('#btnHljs');
const language = document.querySelector('#language');
const divIcons = document.querySelector('.mac-icons');

function mudaLinguagem() {
  const codigo = areaDoCode.querySelector('code');
  areaDoCode.innerHTML = `
  <div class="mac-icons">
      <span class="mac"></span>
      <span class="mac -green"></span>
       <span class="mac -yellow"></span>
  </div> 
  <code class="preview hljs ${language.value}" contenteditable="true" aria-label="editor"></code>`;
  areaDoCode.firstChild.innerText = codigo.innerText;
}

language.addEventListener('change', () => {
  mudaLinguagem();
});

button.addEventListener('click', () => {
  const codigo = areaDoCode.querySelector('code');
  hljs.highlightBlock(codigo);
});
