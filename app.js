let btn=document.querySelectorAll(".button");
let display=document.querySelector(".display");

const clearvalue=()=>{
  display.value="";
}

const appendToDisplay=(input)=>{
  display.value+=input;
}

const calculation=()=>{
  try{
    display.value=eval(display.value);
  }
  catch{
    display.value="Error";
  }
}