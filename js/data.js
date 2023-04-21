// import { getRandInt } from "./utils.js";
import { getData } from "./fetchData.js";
const url = 'https://27.javascript.pages.academy/kekstagram-simple/data'

async function getPhotos() {
  const photos = [];
  const data = await getData(url);
  let id = 0;
  for (const obj of data) {
    id++;
    photos.push({
      id,
      url: obj.url,
      description: obj.description,
      likes: obj.likes,
      comments: obj.comments
    });
  }
  return photos;
}

export {getPhotos};
