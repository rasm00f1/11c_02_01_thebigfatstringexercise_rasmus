"use strict";

window.addEventListener("DOMContentLoaded", initialize);

let formatOption = document.querySelector("#format_options");
let inputString = "";
let firstLetter = "";
let rest = "";
let result = document.querySelector("#output_field");
let firstSpace = "";

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
  } else if (formatOption.value === "Option_4") {
  } else if (formatOption.value === "Option_5") {
  } else if (formatOption.value === "Option_6") {
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

function displayOutput1() {
  result.innerHTML = `${firstLetter}` + `${rest}`;
}

function displayOutput2() {
  result.innerHTML = `${firstLetter}`;
}
