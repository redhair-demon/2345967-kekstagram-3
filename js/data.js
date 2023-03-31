import { getRandInt } from "./utils.js";

function getPhotos() {
  const photos = [];
  for (let i=0; i<25; i++) {
    photos.push({
      id: i+1,
      url: `photos/${i+1}.jpg`,
      description: `my fav photo #${i+1}`,
      likes: getRandInt(15, 200),
      comments: getRandInt(0, 200)
    })
  }
  return photos;
}

export {getPhotos};
