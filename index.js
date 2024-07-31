function encrypt(text) {
  const replacements = {
    e: 'enter',
    i: 'imes',
    a: 'ai',
    o: 'ober',
    u: 'ufat',
  };
  return text.replace(/[eioua]/g, (match) => replacements[match]);
}

function decrypt(text) {
  return text
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
}

const textArea = document.querySelector('textarea');
const placeholder = document.querySelector('.results-placeholder');
const results = document.querySelector('.results-text>span');
const btnEncrypt = document.querySelector('.actions-btns .btn.encrypt');
const btnDecrypt = document.querySelector('.actions-btns .btn.decrypt');
const btnCopy = document.querySelector('.btn.copy');

btnEncrypt.addEventListener('click', () => {
  const text = textArea.value.trim();

  btnEncrypt.classList.add('active');
  btnDecrypt.classList.remove('active');

  placeholder.classList.toggle('hidden', text !== '');

  const encryptedText = encrypt(text);
  results.textContent = encryptedText;
});

btnDecrypt.addEventListener('click', () => {
  const text = textArea.value.trim();

  btnDecrypt.classList.add('active');
  btnEncrypt.classList.remove('active');

  placeholder.classList.toggle('hidden', text !== '');

  const decryptedText = decrypt(text);
  results.textContent = decryptedText;
});

btnCopy.addEventListener('click', () => {
  navigator.clipboard
    .writeText(results.textContent)
    .then(() => alert('Texto copiado al portapapeles'))
    .catch((err) => alert('Error al copiar texto: ' + err));
});
