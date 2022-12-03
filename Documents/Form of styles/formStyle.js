function showResult(){
    const backgroundColorEl = document.getElementById("background-color");
    const borderRadiusEl = document.getElementById("border-radius");
    const widthEl = document.getElementById("width");
    const heightEl = document.getElementById("height");

    const resultEl = document.getElementById("result");
    
    resultEl.style.backgroundColor = backgroundColorEl.value;
    resultEl.style.borderRadius = borderRadiusEl.value;
    resultEl.style.width = widthEl.value;
    resultEl.style.height = heightEl.value;
  }