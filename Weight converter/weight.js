// Global variables declaration
var userValue = document.getElementById("user-value");
var selectInput = document.getElementById("input");
var convertInput = document.getElementById("convert-input");
var output = document.getElementById("output");
var convertBtn = document.getElementById("convert-btn");
var refresh = document.getElementById("refresh");

convertBtn.addEventListener("click",calculate);
convertBtn.addEventListener("click",alertMe);
 
function alertMe(){
   if(userValue.value === ""){
      alert("please enter a value on the input field !");
    }
   else{
      convertInput.style.color = "white";
      convertInput.style.background = "#64b450"
   }
}

function calculate(){
    
   //  check if the value selected to be converted is equal to each other return the input provided

  if(selectInput.value === "Kilograms" && output.value === "Kilograms" ||
  selectInput.value === "grams" && output.value === "grams" ||
  selectInput.value === "pounds" && output.value === "pounds" ||  
  selectInput.value === "ounces" && output.value === "ounces" ||  
  selectInput.value === "Tonne" && output.value === "Tonne"
  )
 {
   convertInput.value = 
   userValue.value;
  }


//   Kilograms

else if(selectInput.value === "Kilograms" && output.value === "grams"){
   convertInput.value = userValue.value * 1000 + "g"
}

else if(selectInput.value === "Kilograms" && output.value === "pounds"){
   convertInput.value = userValue.value * 2.205 + "lbs";
 
}

else if(selectInput.value === "Kilograms" && output.value === "ounces"){
   convertInput.value = userValue.value * 35.274 + "Oz";
}
else if(selectInput.value === "Kilograms" && output.value === "Tonne"){
   convertInput.value = userValue.value / 1000 + "Mg";
}

// grams
else if(selectInput.value === "grams" && output.value === "Kilograms"){
   convertInput.value = userValue.value / 1000 + "Kg"
}

else if(selectInput.value === "grams" && output.value === "pounds"){
   convertInput.value = (userValue.value / 453.6).toFixed(4) + "lbs";
   
 
}

else if(selectInput.value === "grams" && output.value === "ounces"){
   convertInput.value = (userValue.value / 28.35).toFixed(4) + "Oz";
}
else if(selectInput.value === "grams" && output.value === "Tonne"){
   convertInput.value = userValue.value / 1000000 + "Mg";
}

// ounces

else if(selectInput.value === "ounces" && output.value === "Kilograms"){
   convertInput.value = (userValue.value / 35.274).toFixed(4) + "Kg";
   
}

else if(selectInput.value === "ounces" && output.value === "pounds"){
   convertInput.value = userValue.value * 16 + "lbs";
 
}

else if(selectInput.value === "ounces" && output.value === "grams"){
   convertInput.value = userValue.value * 28.35 + "g";
}
else if(selectInput.value === "ounces" && output.value === "Tonne"){
   convertInput.value = userValue.value * 35270 + "Mg";  
}

// pounds


else if(selectInput.value === "pounds" && output.value === "Kilograms"){
   convertInput.value = userValue.value * 2.205 + "Kg";
   
}

else if(selectInput.value === "pounds" && output.value === "ounces"){
   convertInput.value = userValue.value / 16 + "Oz";
 
}

else if(selectInput.value === "pounds" && output.value === "grams"){
   convertInput.value = userValue.value * 453.6 + "g";
}
else if(selectInput.value === "pounds" && output.value === "Tonne"){
   convertInput.value = userValue.value * 2205 + "Mg";  
}


// Tonne

else if(selectInput.value === "Tonne" && output.value === "Kilograms"){
   convertInput.value = userValue.value * 1000 + "Kg";
   
}

else if(selectInput.value === "Tonne" && output.value === "ounces"){
   convertInput.value = (userValue.value / 3520).toFixed(4) + "Oz";
 
}

else if(selectInput.value === "Tonne" && output.value === "pounds"){
   convertInput.value = (userValue.value / 2205).toFixed(4) + "lbs";
}

else if(selectInput.value === "Tonne" && output.value === "grams"){
   convertInput.value = userValue.value * 1000000 + "g";
}
  else return convertInput.value =  "";
  
}

// Clear Texts

convertInput.addEventListener("keyup",clearText);
userValue.addEventListener("keydown",clearText);


function clearText(){
   if(convertInput.value == "" && userValue.value !== ""){
       userValue.value = "";
       convertInput.style.color = "#000";
       convertInput.style.background = "none";
}
else {
   return convertInput.value = "";
}
}

//refresh

refresh.addEventListener("click",refreshList);
function refreshList(e){
 if(e.target === refresh){
 userValue.value = "";
 convertInput.value = "";
 refresh.style.transform = "rotate(90deg)";
 convertInput.style.color = "#000";
 convertInput.style.background = "none";
 }
 else{
   "";
 }
}

refresh.addEventListener("mouseleave",rotateBack);
function rotateBack(){
  refresh.style.transform = "rotate(-90deg)";
  refresh.style.transition = "all .2s";
}

