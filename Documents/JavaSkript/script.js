const client = {
   name: "Sam", age: 16, weight: 40, height: 150
   //name: "Lola", age: 28, weight: 63, height: 182
   //name: "Tom", age: 35, weight: 90, height: 175
   //name: "Kate", age: 62, weight: 50, height: 160
};

if (client.age > 18 && client.age < 60 ) {
  console.log("Вітаю, ви зареєстровані")
} else {
  console.log("Вибачте, ви не зареєстровані")
}

if (client.weight > 60 && client.weight < 120 ) {
  console.log("Вітаю, ви зареєстровані")
} else {
  console.log("Вибачте, ви не зареєстровані")
}

if (client.height > 160 && client.height < 195 ) {
  console.log("Вітаю, ви зареєстровані")
} else {
  console.log("Вибачте, ви не зареєстровані")
}


function registration() {
  const fullNameEl = document.getElementById("fullName");
  const fullName = fullNameEl.value;
}
