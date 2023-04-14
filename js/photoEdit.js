const imgUploadPreview = document.querySelector('.img-upload__preview');

// Эффекты
for (let button of document.querySelectorAll('.effects__radio')) {
  button.addEventListener('click', () => { setEffect(button.value) })
}

const sliderElement = document.querySelector('.effect-level__slider');
const sliderElementValue = document.querySelector('.effect-level__value');

const filters = {
  'chrome': {
    min: 0,
    max: 1,
    name: 'grayscale',
    step: 0.1,
    measure: ''
  },
  'sepia' : {
    min: 0,
    max: 1,
    name: 'sepia',
    step: 0.1,
    measure: ''
  },
  'marvin': {
    min: 0,
    max: 100,
    name: 'invert',
    step: 1,
    measure: '%'
  },
  'phobos': {
    min: 0,
    max: 3,
    name: 'blur',
    step: 0.1,
    measure: 'px'
  },
  'heat': {
    min: 1,
    max: 3,
    name: 'brightness',
    step: 0.1,
    measure: ''
  }
};

// eslint-disable-next-line no-undef
noUiSlider.create(sliderElement, {
  start: 0,
  range: {
    min: 0,
    max: 100,
  },
  step: 1,
  connect: true,
});

sliderElement.hidden = true;

let currentEffect = 'none';
let sliderValue;

function setEffect(effect, flag) {
  const image = imgUploadPreview.querySelector('img');
  if (effect == 'none') {
    sliderElement.setAttribute('hidden', true);
    image.className = '';
    image.style.filter = '';
    return;
  }

  const minValue = filters[effect].min;
  const maxValue = filters[effect].max;
  const stepValue = filters[effect].step;
  const measureValue = filters[effect].measure;
  const nameValue = filters[effect].name;

  if (!flag) {
    image.style.filter = `${nameValue}(${maxValue}${measureValue})`;
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: minValue,
        max: maxValue,
      },
      start: maxValue,
      step: stepValue
    });

    sliderElement.removeAttribute('hidden', false);
    image.className = '';
    image.classList.add(`effects__preview--${effect}`);
    currentEffect = effect;
  }
  else {
    image.style.filter = `${nameValue}(${sliderValue}${measureValue})`;
  }
}

sliderElement.noUiSlider.on('slide', () => {
  sliderElementValue.value = sliderElement.noUiSlider.get();
  sliderValue = sliderElement.noUiSlider.get();
  setEffect(currentEffect, true);
});


// Изменение размера
const scale = document.querySelector('.scale__control--value');
let scaleValue = Number(scale.value.replace('%', ''));
document.querySelector('.scale__control--bigger').addEventListener('click', increaseScale);
document.querySelector('.scale__control--smaller').addEventListener('click', decreaseScale);

function increaseScale() {
  if (scaleValue == 100) {
    return;
  }
  scaleValue += 25;
  scale.value = `${scaleValue}%`;
  imgUploadPreview.style.transform = `scale(${scaleValue/100})`
}

function decreaseScale() {
  if (scaleValue == 25) {
    return;
  }
  scaleValue -= 25;
  scale.value = `${scaleValue}%`;
  imgUploadPreview.style.transform = `scale(${scaleValue/100})`
}
