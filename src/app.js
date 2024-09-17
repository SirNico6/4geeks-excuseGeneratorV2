/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car", "my bed"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch"
  ];

  const getRandomNum = () => {
    return Math.floor(Math.random() * 4);
  };

  let excuse = `${who[getRandomNum()]} ${action[getRandomNum()]} ${
    what[getRandomNum()]
  } ${when[getRandomNum()]}`;

  document.getElementById("excuse").innerText = excuse;
};
