const btn = document.getElementById('btn');
const input = document.getElementById('input');
const shown = document.getElementById('shownMessage');

btn.addEventListener('click', () => {
  if (input.value === '') {
    alert('Please enter a message.');
  }
  shown.textContent = input.value;
  input.value = '';
  console.log('h');
});
