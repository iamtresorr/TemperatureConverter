"use strict";

//getting all field vairables
const fahrenheitField = document.getElementById("fahrenheitField");
const celciusField = document.getElementById("celciusField");

//getting all button variables
const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");

//initialization 
window.onload = init;


function init(){

convertBtn.onclick = onConvertBtnClicked;
resetBtn.onclick = onResetBtnClicked;

};

//celcius = (fahrenheit - 32) * (5/9).....formula for conversion

function onConvertBtnClicked(){

    let fahrenheit = fahrenheitField.value;
    let celcius = (fahrenheit - 32) * (5/9);

    celciusField.value = celcius;

}


function onResetBtnClicked(){
    celciusField.value = '';
    fahrenheitField.value = '';
}