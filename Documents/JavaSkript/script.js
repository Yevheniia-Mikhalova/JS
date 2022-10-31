function doIt() {
  let client = {
    name: "Sam",
    age: 16,
    weight: 100,
    height: 190,
  };

  if (client.age > 18 && client.age < 60 ) {
  } else if (client.age < 18 ){
    alert("Вибач, але ти ще малий")
  }
  
  if (client.weight > 60 && client.weight < 120 ) {
  } else if(client.weight > 120 ){
    alert("Упс, треба схуднути")
  }
  
  if (client.height > 160 && client.height < 195 ) {
  } else if(client.height > 195 ) {
    alert("Вибачте, вы не зареєстровані")
  } else {
    alert("Вітаю, ви зареєстровані")
  }


function registration(){
  const fullNameEl = document.getElementById("fullName");
  const fullName = fullNameEl.value;
}
}