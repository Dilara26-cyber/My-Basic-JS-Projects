const btn = document.getElementById('btn');
const body = document.getElementById('body');
const parag = document.getElementById('hex_p');

function changeHex() {
  let hexi = '#';
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * 16)
      .toString(16)
      .toUpperCase();
    hexi += index;
    console.log(index);
  }
  parag.textContent = `Hex color: ${hexi}`;
  body.style.backgroundColor = hexi;
}

btn.addEventListener('click', changeHex);
