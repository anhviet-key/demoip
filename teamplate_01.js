/** @format */

var checks = document.querySelectorAll(".star-count");
var w1 = document.querySelector(".wrapp2");
var w2 = document.querySelector(".wrapp4");
var w3 = document.querySelector(".div2-btn");
var w4 = document.querySelector(".btn-su");
var w5 = document.getElementById("resignup");
var w6 = document.getElementById("overlay");
var w7 = document.querySelector(".fa-times-circle");

window.onscroll = () => {
  if (
    document.documentElement.scrollTop > 510 ||
    document.body.scrollTop > 510
  ) {
    // console.log("----");
    w1.style.animation = "lefton 2s ease-in-out";
    w2.style.animation = "righton 2s ease-in-out";
  } else {
    w1.style.animation = "none";
    w2.style.animation = "none";
  }
};
w3.onmousedown = function () {
  w3.style.boxShadow = "5px 10px 20px rgba(0,0,0,0.5)";
  w3.style.transform = "translateY(5px)";
};
w3.onmouseup = function () {
  w3.style.boxShadow = "none";
  w3.style.transform = "translateY(0px)";
};
w4.onmousedown = function () {
  w4.style.boxShadow = "5px 10px 20px rgba(0,0,0,0.5)";
  w4.style.transform = "translateY(5px)";
};
w4.onmouseup = function () {
  w4.style.boxShadow = "none";
  w4.style.transform = "translateY(0px)";
};
w3.onclick = function (e) {
  w5.style.display = "block";
  w6.style.display = "block";
};
w7.onclick = function (e) {
  w5.style.display = "none";
  w6.style.display = "none";
};
