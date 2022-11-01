function validateData() {
  const nameEl = document.getElementById("name");
  const ageEl = document.getElementById("age");
  const weightEl = document.getElementById("weight");
  const heightEl = document.getElementById("height");

  const name = nameEl.value;
  const age = ageEl.value;
  const weight = weightEl.value;
  const height = heightEl.value;

  if (age < 18 || age > 60 ) {
     alert("Sorry, your age is wrong");
  } else if (weight < 60 || weight > 120 ) {
     alert("Sorry, your weight is wrong");
  } else if (height < 160 || height > 195 ) {
    alert("Sorry, your height is wrong");
  } else {
    alert("Congratulations, you are registered");

    nameEl.value = "";
    ageEl.value = "";
    weightEl.value = "";
    heightEl.value = "";
  }
}
