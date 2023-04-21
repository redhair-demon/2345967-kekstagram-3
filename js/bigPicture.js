const imageUpload = document.querySelector('.img-upload__overlay');
const fileInput = document.querySelector('.img-upload__input');
const closeImageUploadButton = document.querySelector('.img-upload__cancel');

function escapeKeyHandler(ev) {
  if (ev.key === 'Escape') {
    closeImageUpload();
  }
}

function closeImageUpload() {
  imageUpload.classList.add('hidden');
  document.getElementById('upload-select-image').reset();
  document.removeEventListener('keydown', escapeKeyHandler);
}

function openImageUpload() {
  imageUpload.classList.remove('hidden');
  document.addEventListener('keydown', escapeKeyHandler);
}

function errorAlert() {
  const temp = document.getElementById('error').content.cloneNode(true);
  temp.querySelector('.error__button').addEventListener('click', () => {document.querySelector('section.error').remove()})
  document.body.appendChild(temp);
}

function successAlert() {
  const temp = document.getElementById('success').content.cloneNode(true);
  temp.querySelector('.success__button').addEventListener('click', () => {document.querySelector('section.success').remove()})
  document.body.appendChild(temp);
}

fileInput.addEventListener('change', openImageUpload);
closeImageUploadButton.addEventListener('click', closeImageUpload);

export {closeImageUpload, errorAlert, successAlert};
