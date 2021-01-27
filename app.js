const btn = document.getElementById('btn');
const body = document.getElementById('demo');
const colors = ['red', 'aqua', 'violet', 'green', 'wheat'];

btn.addEventListener('click', () => {
  const colorIndex = Math.floor(Math.random() * colors.length);
  demo.style.backgroundColor = colors[colorIndex];
  console.log(colorIndex);
});
