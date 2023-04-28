import {openAlert} from "./bigPicture.js"

async function getData(url) {
  try {
    return (await fetch(url)).json();
  } catch (error) {
    alert(error);
  }
}

const sendURL = 'https://27.javascript.pages.academy/kekstagram-simple';

async function sendData(data) {
  console.log(JSON.stringify(data));
  try {
    const response = await fetch(sendURL, { method: 'POST', headers: {  }, body: data });
    if (response.ok) {
      console.log(data);
      openAlert('success');
      console.log(response);
    } else {
      openAlert('error');
    }
  } catch (error) {
    openAlert('error');
  }
}

export {getData, sendData};
