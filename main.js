(function(){
  "use strict";


var currentTime;

var firstColor = "#";

var secondColor ="#";

var thirdColor ="#";

var fourthColor ="#";

var barLength;

var hexConverter = function(input){
  return input.toString(16);
};

var currentHour = function(){
  return currentTime.getHours();
};

var currentMinute = function(){
  return currentTime.getMinutes();
};

var currentSecond = function(){
  return currentTime.getSeconds();
};

var hexHour = function(hour){
  return hexConverter(hour);
};

var hexMinute = function(minute){
  return hexConverter(minute*2);
};

var hexSecond = function(seconds){
  return hexConverter(seconds*10);
};

var hexCombined = function(first, second, third){
  return "#" + (("0"+first).slice(-2)) + (("0"+second).slice(-2)) + (("0"+third).slice(-2));
};

var barMaker = function(fillAmount){
  document.getElementById("leftBar").style.paddingLeft = fillAmount;
  document.getElementById("rightBar").style.paddingLeft = fillAmount;
};

var changeBackground = function(hexColor){
  document.getElementById("main").style.backgroundColor = hexColor;
  document.getElementById("second").style.backgroundColor = firstColor;
  document.getElementById("third").style.backgroundColor = secondColor;
  document.getElementById("fourth").style.backgroundColor = thirdColor;
  document.getElementById("last").style.backgroundColor = fourthColor;
  fourthColor = thirdColor;
  thirdColor = secondColor;
  secondColor = firstColor;
  firstColor = hexColor;
};

function displayTime(){
  document.getElementById("hours").innerHTML = ("0"+currentHour()).slice(-2);
  document.getElementById("minutes").innerHTML = ("0"+currentMinute()).slice(-2);
  document.getElementById("seconds").innerHTML = ("0"+currentSecond()).slice(-2);
}

var everySecond = setInterval(function() {
  currentTime = new Date();
  console.log(hexHour(currentHour()),hexMinute(currentMinute()), hexSecond(currentSecond()));
  console.log(hexCombined(hexHour(currentHour()),hexMinute(currentMinute()),hexSecond(currentSecond())));
  barLength = currentSecond()+"px";
  console.log(barLength);
  displayTime();
  changeBackground(hexCombined(hexHour(currentHour()),hexMinute(currentMinute()),hexSecond(currentSecond())));
  barMaker(barLength);
}, 1000);

// var timeTransform = document.querySelector("h1");
//
//
// var hexTime = function(/*numericalTime*/){
//   console.log("Moused Overed!");
// };
//
// timeTransform.addEventListener("mouseover", hexTime());







}());
