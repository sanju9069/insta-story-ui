const dataId = document.querySelectorAll('div[data-slider]');
const statusWrap = document.querySelector('.status');
const getSlideLength = dataId.length - 1;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const stopStart = document.querySelector('.stop-progress');
let spanHtml = '';
let currentSlide = 0;
let autoPlay = null;
let duration = 2000;
let pause = false;

// showing first slide at initial
dataId[0].style.display = 'block';

// populate pagination as per slide count
for (let i = 0; i <= getSlideLength; i++) {
  spanHtml += `<button class="bars"><span data-id="${i}"></span></button>`;
}
statusWrap.innerHTML = spanHtml;
const getProgessSpan = document.querySelectorAll('.status > button > span');

// run slide autoplay at initial
const autoPlayMethod = () => {
  getProgessSpan[0].style.animation = `mynewmove ${duration / 1000}s linear`;
  getProgessSpan[0].classList.add('visited');
  autoPlay = setInterval(nextMethod, duration);
};

// hide all slide after click of next prev
const hideSlide = () => {
  dataId.forEach((ele, idx) => {
    dataId[idx].style.display = 'none';
  });
};

// for activating and disactivating progress bar
const runProgressBar = () => {
  hideSlide();
  clearInterval(autoPlay);
  setTimeout(() => {
    getProgessSpan[currentSlide].style.animation = `mynewmove ${
      duration / 1000
    }s linear`;
    getProgessSpan[currentSlide].classList.add('visited');
  }, 0);
  dataId[currentSlide].style.display = 'block';
  autoPlay = setInterval(nextMethod, duration);
};

// next prev button enable disable
const buttonAbleDisable = (bool1, bool2) => {
  prev.disabled = bool1;
  next.disabled = bool2;
};

// onclick of next slide
const nextMethod = () => {
  if (getSlideLength === 0) {
    buttonAbleDisable(false, false);
    return;
  }
  currentSlide++;
  if (currentSlide >= getSlideLength) {
    currentSlide = getSlideLength;
  }
  getProgessSpan[currentSlide - 1].style.animation = `mynewmove 0s linear`;
  getProgessSpan[currentSlide - 1].classList.add('visited');
  runProgressBar();
};

// onclick of prev slide
const prevMethod = () => {
  if (getSlideLength === 0) {
    buttonAbleDisable(false, false);
    return;
  }
  currentSlide--;
  if (currentSlide <= 0) {
    currentSlide = 0;
  }
  getProgessSpan[currentSlide + 1].classList.remove('visited');
  getProgessSpan[currentSlide + 1].style = '';
  getProgessSpan[currentSlide].style = '';
  runProgressBar();
};

// pause play toggle
const autoPlayStop = () => {
  pause = !pause;
  if (!pause) {
    runProgressBar();
    this.classList.remove('pause');
  } else {
    clearInterval(autoPlay);
    this.classList.add('pause');
  }
};

autoPlayMethod();
next.addEventListener('click', nextMethod);
prev.addEventListener('click', prevMethod);
//stopStart.addEventListener('click', autoPlayStop);
