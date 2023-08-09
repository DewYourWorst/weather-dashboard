var apiKey = "90cf2e3c6bc972a8cb34a7c0a63ad863";
var userInput;
var cityName = document.querySelector("#city-name")
var tempInfo = document.querySelector("#temp-info")
var windInfo = document.querySelector("#wind-info")
var humidInfo = document.querySelector("#humid-info")
//api.openweathermap.org/data/2.5/weather?q={city}&appid:{apiKey};
var start = function(){
    var userInput = document.querySelector("#user-input").value
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=" + apiKey;
    fetch(queryURL);
 }
