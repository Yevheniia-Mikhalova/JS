const img1 = "https://motor.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2022/01/27/11/5197968/f7aba1d92862152a77a6fcf637d2ea171e1defe8.jpg";
const img2 = "https://ratatum.com/wp-content/uploads/2018/05/1-35.jpg";
const img3 = "https://n1s1.hsmedia.ru/a6/33/c1/a633c1755e5c4f208f8845c2fc71c5db/665x495_0xac120003_9466535211562615363.jpg";
const img4 = "https://novate.ru/files/u18992/1899272387.jpg";

let currentImgName = 1;

function changeImg(imgName) {
  const mainImgEl = document.getElementById("main-img");
  
  if (imgName === 1) {
    mainImgEl.src = img1;
  }
  
  if (imgName === 2) {
    mainImgEl.src = img2;
  }
  
  if (imgName === 3) {
    mainImgEl.src = img3;
  }

  if (imgName === 4) {
    mainImgEl.scr = img4;
  }
  
  currentImgName = imgName;
  changeActiveClass();
}

function next(){
  if (currentImgName === 1) {
    changeImg(2);
  } else if (currentImgName === 2) {
    changeImg(3);
  } else if (currentImgName === 3) {
    changeImg(4);
  } else if (currentImgName === 4) {
    changeImg(1);
  }
}

function prev(){
  if (currentImgName === 1) {
    changeImg(4);
  } else if (currentImgName === 2) {
    changeImg(1);
  } else if (currentImgName === 3) {
    changeImg(2);
  } else if (currentImgName === 4) {
    changeImg(3);
  }
}

function changeActiveClass() {
  const dotEl1 = document.getElementById("dot1");
  const dotEl2 = document.getElementById("dot2");
  const dotEl3 = document.getElementById("dot3");
  const dotEl4 = document.getElementById("dot4");
  
  dotEl1.classList.remove("active");
  dotEl2.classList.remove("active");
  dotEl3.classList.remove("active");
  dotEl4.classList.remove("active");
  
  if(currentImgName === 1) {
    dotEl1.classList.add("active");
  }
  
  if(currentImgName === 2) {
    dotEl2.classList.add("active");
  }
  
  if(currentImgName === 3) {
    dotEl3.classList.add("active");
  }

  if(currentImgName === 4) {
    dotEl4.classList.add("active");
  }
}