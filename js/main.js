import { getRandInt, isStringFits} from "./utils.js";
import "./draw.js";
import "./bigPicture.js"
import './form.js'
import './photoEdit.js'
import { sendData } from "./fetchData.js";
getRandInt(0, 200);
isStringFits('', 12);

document.getElementById('upload-select-image').action = ''; //async function() {await sendData();}
document.getElementById('upload-select-image').addEventListener('submit', async (evt) => {
  evt.preventDefault();
  await sendData();
});


