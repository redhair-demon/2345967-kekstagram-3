import {errorAlert, successAlert} from "./bigPicture.js"

async function getData(url) {
  try {
    return (await fetch(url)).json();
  } catch (error) {
    alert(error);
  }
}

const sendURL = 'https://27.javascript.pages.academy/kekstagram-simple';

async function sendData(data) {
  alert('Отправка формы...');
  console.log(JSON.stringify(data));
  try {
    const response = await fetch(sendURL, { method: 'POST', headers: {  }, body: data });
    if (response.ok) {
      console.log(data);
      successAlert();
      console.log(response);
    } else {
      errorAlert();
    }
  } catch (error) {
    errorAlert();
  }
}

export {getData, sendData};
