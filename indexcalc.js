let btn = document.getElementById("btn");
let date = document.getElementById("birthday");
let result = document.getElementById("result");
console.log(btn,date,result)

btn.addEventListener("click",() =>{
     let dobValue = date.value;

  if (dobValue) {
    // Calculate age based on the entered date of birth
    let birthdate = new Date(dobValue);
    let currentDate = new Date();
    let age = currentDate.getFullYear() - birthdate.getFullYear();
    if (birthdate.getMonth() > currentDate.getMonth()) {
      age--;
      // if(birthdate.getDay()<=currentDate.getDay)
    } else if (birthdate.getMonth() == currentDate.getMonth()) {
      if (birthdate.getDay() > currentDate.getDay()) {
        age--;
      }
    }
    result.textContent = "Your age is " + age + " years old";
  } else {
    alert("Please enter your birthday");
  }
})