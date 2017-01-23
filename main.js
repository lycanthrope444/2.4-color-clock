(function(){
  "use strict";


var currentTime;

var firstColor = "#";

var secondColor ="#";

var thirdColor ="#";

var fourthColor ="#";

var barLength;

var mouseHover = false;

var hexTime = document.querySelector("H1");

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
  return hexConverter(hour*11);
};

var hexMinute = function(minute){
  return hexConverter(minute*4);
};

var hexSecond = function(seconds){
  return hexConverter(seconds*12);
};

var hexCombined = function(first, second, third){
  return "#" + (("0"+first).slice(-2)) + (("0"+second).slice(-2)) + (("0"+third).slice(-2));
};

var barMaker = function(fillAmount){
  document.getElementById("leftBar").style.width = fillAmount;
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
  document.getElementById("hours").textContent = ("0"+currentHour()).slice(-2);
  document.getElementById("minutes").textContent = ("0"+currentMinute()).slice(-2);
  document.getElementById("seconds").textContent = ("0"+currentSecond()).slice(-2);
}

hexTime.addEventListener("mouseover", function(){
  mouseHover = true;
});

hexTime.addEventListener("mouseout", function(){
  mouseHover = false;
});

currentTime = new Date();
console.log(currentHour(),currentMinute(),currentSecond());
console.log(hexHour(currentHour()),hexMinute(currentMinute()), hexSecond(currentSecond()));
console.log(hexCombined(hexHour(currentHour()),hexMinute(currentMinute()),hexSecond(currentSecond())));
barLength = (currentSecond()/60)*100+"%";
displayTime();
changeBackground(hexCombined(hexHour(currentHour()),hexMinute(currentMinute()),hexSecond(currentSecond())));
barMaker(barLength);

var everySecond = setInterval(function() {
  if (mouseHover === false){
    currentTime = new Date();
    console.log(currentHour(),currentMinute(),currentSecond());
    console.log(hexHour(currentHour()),hexMinute(currentMinute()), hexSecond(currentSecond()));
    console.log(hexCombined(hexHour(currentHour()),hexMinute(currentMinute()),hexSecond(currentSecond())));
    console.log(currentSecond()/60);
    barLength = (currentSecond()/60)*100+"%";
    displayTime();
    changeBackground(hexCombined(hexHour(currentHour()),hexMinute(currentMinute()),hexSecond(currentSecond())));
    barMaker(barLength);
  } else {
    currentTime = new Date();
    barLength = (currentSecond()/60)*100+"%";
    console.log(currentHour(),currentMinute(),currentSecond());
    document.getElementById("hours").textContent = ("0"+hexHour(currentHour())).slice(-2);
    document.getElementById("minutes").textContent = ("0"+hexMinute(currentMinute())).slice(-2);
    document.getElementById("seconds").textContent = ("0"+hexSecond(currentSecond())).slice(-2);
    changeBackground(hexCombined(hexHour(currentHour()),hexMinute(currentMinute()),hexSecond(currentSecond())));
    barMaker(barLength);
  }
}, 200);




}());
