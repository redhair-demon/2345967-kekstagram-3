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

function escapeAlert(ev) {
  if (ev.key === 'Escape') {
    closeAlert();
  }
}

function openAlert(type) {
  const temp = document.getElementById(type).content.cloneNode(true);
  const closeButton = temp.querySelector(`.${type}__button`);
  closeButton.addEventListener('click', () => {document.querySelector(`section.${type}`).remove()});
  document.addEventListener('keydown', escapeAlert);
  document.body.appendChild(temp);
}

function closeAlert() {
  document.querySelectorAll('section.error, section.success').forEach((value) => {value.remove()});
  document.removeEventListener('keydown', escapeAlert);
}

fileInput.addEventListener('change', openImageUpload);
closeImageUploadButton.addEventListener('click', closeImageUpload);

export {closeImageUpload, openAlert};
