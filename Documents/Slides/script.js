const images = [
  "https://motor.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2022/01/27/11/5197968/f7aba1d92862152a77a6fcf637d2ea171e1defe8.jpg",
  "https://ratatum.com/wp-content/uploads/2018/05/1-35.jpg",
  "https://n1s1.hsmedia.ru/a6/33/c1/a633c1755e5c4f208f8845c2fc71c5db/665x495_0xac120003_9466535211562615363.jpg",
  "https://novate.ru/files/u18992/1899272387.jpg"
];
let currentIndex = 0;

function changeImg(index) {
  const mainImgEl = document.getElementById("main-img");
  mainImgEl.src = images[index];
}

function next() {
  if (currentIndex < images.length - 1) {
    currentIndex = currentIndex + 1;
  } else {
    currentIndex = 0;
  }
  changeImg(currentIndex);
}

function prev() {
  if (currentIndex > 0) {
    currentIndex = currentIndex - 1;
  } else {
    currentIndex = images.length - 1;
  }
  changeImg(currentIndex);
}
function addDots() {
  const dotsEl = document.getElementById("dot-list");
  let dotHTML = dotsEl.innerHTML;
  
  for (let i = 0; i < images.length; i = i + 1) {
    dotHTML =
      "<button id='dot-list' onclick='changeImg(${i})'></button>";
    dotsEl.innerHTML += dotHTML;
  }
}
addDots();

function changeActive() {
  const dotsEl = document.getElementById("dot-list");
  dotsEl.classList.remove("active");

  if ( currentIndex === [0]){
    dots[i].classList.add("active");
  }
  dots[currentIndex].classList.add("active");
}

