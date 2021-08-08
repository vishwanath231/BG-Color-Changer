const Button = document.querySelector('.btn');
const Container = document.querySelector('.container');
const code = document.querySelector('.code');

Button.addEventListener('click', () => {
  let color = "#";
  color += Math.random().toString(16).slice(2,8);
  Container.style.background = color;
  code.innerHTML = color;
})