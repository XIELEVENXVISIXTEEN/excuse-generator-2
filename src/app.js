/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = ExcuseGenerate();
  });
};
let ExcuseGenerate = () => {
  let Who = ["The dog", "My grandma", "His turtle", "My bird"];
  let Action = ["ate", "peed", "crushed", "broke"];
  let What = ["my homework", "the keys", "the car"];
  let When = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let WhoIndex = Math.floor(Math.random() * Who.length);
  let ActionIndex = Math.floor(Math.random() * Action.length);
  let WhatIndex = Math.floor(Math.random() * What.length);
  let WhenIndex = Math.floor(Math.random() * When.length);

  return (
    Who[WhoIndex] +
    " " +
    Action[ActionIndex] +
    " " +
    What[WhatIndex] +
    " " +
    When[WhenIndex]
  );
};
