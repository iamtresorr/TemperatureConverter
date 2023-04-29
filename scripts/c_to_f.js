"use strict";

//getting all field vairables
const celciusField = document.getElementById("celciusField");
const fahrenheitField = document.getElementById("fahrenheitField");
const errorMessage = document.getElementById("errorMessage");

//getting all button variables
const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");

//initialization 
window.onload = init;


function init(){

convertBtn.onclick = onConvertBtnClicked;
resetBtn.onclick = onResetBtnClicked;

};

//fahrenheit = (celcius *  (9/5)) + 32.....formula for conversion

function onConvertBtnClicked(){

    if(isNaN(Number(celciusField.value))){
        errorMessage.innerHTML = "Please input a number";
    }

    else{
        errorMessage.innerHTML="";
        let celcius = celciusField.value;
        let fahrenheit = (celcius *  (9/5)) + 32;
        fahrenheitField.value = fahrenheit;

    }


}


function onResetBtnClicked(){
    celciusField.value = '';
    fahrenheitField.value = '';
}