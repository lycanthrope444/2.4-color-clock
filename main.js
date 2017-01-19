(function(){
  "use strict";


var currentTime;

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
  return hexConverter(minute);
};

var hexSecond = function(seconds){
  return hexConverter(seconds);
};

var hexCombined = function(first, second, third){
  return "#" + (("0"+first).slice(-2)) + (("0"+second).slice(-2)) + (("0"+third).slice(-2));
};

var changeBackground = function(hexColor){
  document.getElementById("main").style.backgroundColor = hexColor;
};

console.log("JS ran");

function displayTime(){
  document.getElementById("hours").innerHTML = ("0"+currentHour()).slice(-2);
  document.getElementById("minutes").innerHTML = ("0"+currentMinute()).slice(-2);
  document.getElementById("seconds").innerHTML = ("0"+currentSecond()).slice(-2);
}

var everySecond = setInterval(function() {
  currentTime = new Date();
  console.log(currentHour(), currentMinute(), currentSecond());
  console.log(hexHour(currentHour()),hexMinute(currentMinute()), hexSecond(currentSecond()));
  console.log(hexCombined(hexHour(currentHour()),hexMinute(currentMinute()),hexSecond(currentSecond())));
  displayTime();
  changeBackground(hexCombined(hexHour(currentHour()),hexMinute(currentMinute()),hexSecond(currentSecond())));
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
