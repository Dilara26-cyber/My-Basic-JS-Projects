const btn = document.querySelector('.challenge');

const ul = document.querySelector('.list');

const replaceJoke = async () => {
  const text = await jokes();
  const newLi = document.createElement('li');
  newLi.append(text);
  ul.append(newLi);
};

const jokes = async () => {
  const head = { headers: { Accept: 'application/json' } };
  const res = await axios.get('https://icanhazdadjoke.com/', head);
  return res.data.joke;
};

btn.addEventListener('click', replaceJoke);
