const dataId = document.querySelectorAll('[data-slider]');
const statusWrap = document.querySelectorAll('[data-status]');
const getSlideLength = dataId.length - 1;
const next = document.querySelectorAll('[data-next]');
const prev = document.querySelectorAll('[data-prev]');
const stopStart = document.querySelectorAll('[data-pause-play]');
const visited = 'visited';
let spanHtml = '';
let currentSlide = 0;
let autoPlay = null;
let duration = 2000;
let pause = false;

// showing first slide at initial
dataId[0].style.display = 'block';

// populate pagination as per slide count
for (let i = 0; i <= getSlideLength; i++) {
  const btn = document.createElement('button');
  btn.classList.add('bars');
  const span = document.createElement('span');
  span.setAttribute('data-id', i);
  btn.appendChild(span);
  statusWrap[0].append(btn);
}

const getProgessSpan = document.querySelectorAll('[data-id]');

// run slide autoplay at initial
const autoPlayMethod = () => {
  getProgessSpan[0].style.animation = `mynewmove ${duration / 1000}s linear`;
  getProgessSpan[0].classList.add(visited);
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
    getProgessSpan[currentSlide].classList.add(visited);
  }, 0);
  dataId[currentSlide].style.display = 'block';
  autoPlay = setInterval(nextMethod, duration);
};

// onclick of next slide
const nextMethod = () => {
  if (getSlideLength === 0) return;
  currentSlide++;
  if (currentSlide >= getSlideLength) {
    currentSlide = getSlideLength;
  }
  getProgessSpan[currentSlide - 1].style.animation = `mynewmove 0s linear`;
  getProgessSpan[currentSlide - 1].classList.add(visited);
  runProgressBar();
};

// onclick of prev slide
const prevMethod = () => {
  if (getSlideLength === 0) return;
  currentSlide--;
  if (currentSlide <= 0) {
    currentSlide = 0;
  }
  getProgessSpan[currentSlide + 1].classList.remove(visited);
  getProgessSpan[currentSlide + 1].style = '';
  getProgessSpan[currentSlide].style = '';
  runProgressBar();
};

// pause play toggle
const autoPlayStop = () => {
  pause = !pause;
  if (!pause) {
    runProgressBar();
    stopStart[0].classList.remove('pause');
  } else {
    clearInterval(autoPlay);
    getProgessSpan[currentSlide].classList.remove('visited');
    getProgessSpan[currentSlide].style = '';
    stopStart[0].classList.add('pause');
  }
};

autoPlayMethod();
next[0].addEventListener('click', nextMethod);
prev[0].addEventListener('click', prevMethod);
//stopStart[0].addEventListener('click', autoPlayStop);

const dummyobj = [
  {
    a: 1,
    ev: 'A',
    uni: 1,
  },
  {
    a: 1,
    ev: 'S',
    uni: 2,
  },
  {
    a: 1,
    ev: 'A',
    uni: 3,
  },
  {
    a: 2,
    ev: 'A',
    uni: 4,
  },
  {
    a: 2,
    ev: 'A',
    uni: 5,
  },
];

let objKeys = [];
for (let i = 0; i < dummyobj.length; i++) {
  let num = dummyobj[1].a;
  if (dummyobj[i].ev === 'S') continue;
  num = dummyobj[i].a;
  if (dummyobj[i].a === num) {
  }
  num = null;
}
