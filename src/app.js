/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  console.log("hello");

  let reloadButton = document.querySelector("#reloadButton");
  reloadButton.addEventListener("click", genericExcuse);
};

let genericExcuse = () => {
  let who = [
    "The dog",
    "My grandma",
    "His turtle",
    "My bird",
    "The cat",
    "A ball"
  ];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * 4);
  let whatIndex = Math.floor(Math.random() * 3);
  let whenIndex = Math.floor(Math.random() * 5);
  console.log(who.length);

  document.querySelector("#excuse").innerHTML =
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex];
};
