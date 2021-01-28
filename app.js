const btn = document.getElementById('btn');
const body = document.getElementById('demo');
const hex = document.getElementById('hex');
let colors = [
  {
    clr: 'red',
    hexi: '#ff000',
  },
  {
    clr: 'aqua',
    hexi: '#00ffff',
  },
  {
    clr: 'violet',
    hexi: '#ee82ee',
  },
  {
    clr: 'green',
    hexi: '#00ff00',
  },
  {
    clr: 'wheat',
    hexi: '#f5deb3',
  },
];

btn.addEventListener('click', () => {
  const colorIndex = Math.floor(Math.random() * colors.length);
  demo.style.backgroundColor = colors[colorIndex].clr;
  hex.innerHTML = `Hex Code: ${colors[colorIndex].hexi}`;
  console.log(colorIndex);
  if (colorIndex === 0) {
    hex.style.color = colors[colorIndex + 1].clr;
  } else {
    hex.style.color = colors[colorIndex - 1].clr;
  }
});
