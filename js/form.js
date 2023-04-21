import { sendData } from "./fetchData.js";
import { closeImageUpload } from "./bigPicture.js";

const form = document.querySelector('.img-upload__form');

// eslint-disable-next-line no-undef
const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  successClass: 'form--valid',
  errorClass: 'form--invalid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

const minLen = 20;
const maxLen = 140;

function validateComment(comment) {
  if (comment.length >= minLen && comment.length <= maxLen) {
    document.querySelector('.img-upload__submit').disabled = false;
    return true;
  }
  document.querySelector('.img-upload__submit').disabled = true;
    return false;
}

pristine.addValidator(
  form.querySelector('.text__description'),
  validateComment,
  `Комментарий дложен быть от ${minLen} до ${maxLen} символов.`
);

form.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  if(pristine.validate()) {
    const data = new FormData(document.getElementById('upload-select-image'))
    evt.target.querySelector('.img-upload__submit').disabled = true;
    console.log(form);
    await sendData(data);
    closeImageUpload();
  }
});
