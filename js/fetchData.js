async function getData(url) {
  try {
    return (await fetch(url)).json();
  } catch (error) {
    alert(error);
  }
}

const sendURL = 'https://27.javascript.pages.academy/kekstagram-simplep';

async function sendData() {
  // const filename = document.getElementById('upload-file').value;
  // const scale = document.querySelector('scale__control-value').value;
  const data = new FormData(document.getElementById('upload-select-image'))
  console.log(JSON.stringify(data));
  try {
    fetch(sendURL, {
      method: "POST",
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: JSON.stringify(data)
    })
  } catch (error) {
    alert(error);
  }
}

export {getData, sendData};
