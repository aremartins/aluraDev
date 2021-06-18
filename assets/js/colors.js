// function changeColor() {
//   let editor = document.querySelector('.main__content-color');
//   let color = document.getElementById('colorInput').value;
//   editor.style.backgroundColor = color;
// }

const contentColor = document.querySelector('.main__content-color');
const selectColor = document.querySelector('#colorInput');

selectColor.addEventListener('input', function(event) {
    let color = event.target.value;
    contentColor.style = `background: ${color}`;
})