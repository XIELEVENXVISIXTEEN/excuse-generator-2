/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here

let generateExcuse = () => {
  const who = ["The dog", "My grandma", "His turtle", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car"];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = who[Math.floor(Math.random() * who.length)];
  let actionIndex = action[Math.floor(Math.random() * action.length)];
  let whatIndex = what[Math.floor(Math.random() * what.length)];
  let whenIndex = when[Math.floor(Math.random() * when.length)];

  return (
    "whoIndex" + " " + "actionIndex" + " " + "whatIndex" + " " + "whenIndex"
  );
};

// document.getElementById("the-excuse").innerHTML = generateExcuse();
