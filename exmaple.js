alert("hi, welcome to my page");

window.onload = setup;
function setup() {
  var mainButton = document.getElementById("mainButton");
  var checkBox = document.getElementById("box");
  mainButton.onclick = changeColor;
  checkBox.onclick = changeLink;

}

function changeColor(color) {
  document.getElementById("special").style.fontSize = "44pt";
  document.getElementById("special").style.color = color;
  console.log("hi");
}


function changeLink() {
  console.log("function");
  if (document.getElementById("box").checked) {
    document.getElementById("linkparagraph").innerHTML = '<a href = "https://gocolbymules.com/sports/wswimdive/2016-17/releases/wswimATR2-9-17?fbclid=IwAR1Zw931FPdB9GidoRW1u-pRJEcNWmZrLVRGhrbnpZcDw3ljZpIyCvc2uWs">A different swimming article</a>';
    console.log("changed");
  }
  else {
    document.getElementById("linkparagraph").innerHTML = '<a href="https://www.nescac.com/news/2018-19/Friday_Feature/COL_Taylor-Roth">Here is some information about swimming</a>';
  }
}

// document.getElementById("mainButton").onclick = function () {
//   alert("Hi");
// }
//
//
//
// // = function() {colorChange()};
//
// function colorChange(){
//
//   document.getElementById("special").color = "red";
// }
