"use strict";

window.addEventListener("DOMContentLoaded", initialize);

let formatOption = document.querySelector("#format_options");
let inputString = "";
let firstLetter = "";
let rest = "";
let result = document.querySelector("#output_field");
let firstSpace = "";
let secondSpace = "";
let inputStringLength = "";

function initialize() {
  console.log("Initializing");
  document.querySelector("#output_generator").addEventListener("click", generateOutput);
}

function generateOutput() {
  console.log("Generate output");
  inputString = document.querySelector(".input_field").value;

  if (formatOption.value === "Option_1") {
    console.log("option 1");
    option1();
  } else if (formatOption.value === "Option_2") {
    console.log("Option 2");
    option2();
  } else if (formatOption.value === "Option_3") {
    console.log("Option 3");
    option3();
  } else if (formatOption.value === "Option_4") {
    console.log("Option 4");
    option4();
  } else if (formatOption.value === "Option_5") {
    console.log("Option 5");
    option5();
  } else if (formatOption.value === "Option_6") {
    console.log("Option 6");
    option6();
  } else if (formatOption.value === "Option_7") {
  } else if (formatOption.value === "Option_8") {
  } else {
  }
}

function option1() {
  firstLetter = inputString.substring(0, 1).toUpperCase();
  rest = inputString.substring(1).toLowerCase();

  displayOutput1();
}

function option2() {
  firstSpace = inputString.indexOf(" ");
  firstLetter = inputString.substring(0, firstSpace);

  displayOutput2();
}

function option3() {
  firstSpace = inputString.indexOf(" ");
  firstLetter = inputString.substring(0, firstSpace).length;

  displayOutput3();
}

function option4() {
  firstSpace = inputString.indexOf(" ");
  secondSpace = inputString.lastIndexOf(" ");

  displayOutput4();
}

function option5() {
  inputStringLength = inputString.length;

  if (inputString.substring(inputStringLength - 4, inputStringLength) === ".jpg") {
    result.innerHTML = "True";
  } else if (inputString.substring(inputStringLength - 4, inputStringLength) === ".png") {
    result.innerHTML = "True";
  } else {
    result.innerHTML = "False";
  }
}

function option6() {}

function displayOutput1() {
  result.innerHTML = `${firstLetter}` + `${rest}`;
}

function displayOutput2() {
  result.innerHTML = `${firstLetter}`;
}

function displayOutput3() {
  result.innerHTML = firstLetter;
}

function displayOutput4() {
  result.innerHTML = inputString.substring(firstSpace + 1, secondSpace);
}
