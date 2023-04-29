"use strict";

//getting all field vairables
const celciusField = document.getElementById("celciusField");
const fahrenheitField = document.getElementById("fahrenheitField");


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

    let celcius = celciusField.value;
    let fahrenheit = (celcius *  (9/5)) + 32;

    fahrenheitField.value = fahrenheit;

}


function onResetBtnClicked(){
    celciusField.value = '';
    fahrenheitField.value = '';
}