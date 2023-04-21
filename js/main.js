import { getRandInt, isStringFits} from "./utils.js";
import "./draw.js";
import "./bigPicture.js"
import './form.js'
import './photoEdit.js'
// import { sendData } from "./fetchData.js";
getRandInt(0, 200);
isStringFits('', 12);

document.getElementById('upload-select-image').action = ''; //async function() {await sendData();}
// document.getElementById('upload-select-image').addEventListener('submit', async (evt) => {
//   evt.preventDefault();
//   const data = new FormData(document.getElementById('upload-select-image'));
//   console.log(JSON.stringify(data));
//   await sendData();
// });


