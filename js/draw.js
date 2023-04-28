import { getPhotos } from './data.js';

const pictureTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');
const newFragment = new DocumentFragment();

const photos = await getPhotos();

photos.forEach((photo)=> {
  const template = pictureTemplate.cloneNode(true);
  const img = template.querySelector('.picture__img');
  const likes = template.querySelector('.picture__likes');
  const comments = template.querySelector('.picture__comments');
  img.src = photo.url;
  likes.textContent = photo.likes;
  comments.textContent = photo.comments;
  newFragment.appendChild(template);
});

pictures.appendChild(newFragment);
export {pictures};
