var apiKey = "90cf2e3c6bc972a8cb34a7c0a63ad863";
var userInput;
var cityName = document.querySelector("#city-name")
var tempInfo = document.querySelector("#temp-info")
var windInfo = document.querySelector("#wind-info")
var humidInfo = document.querySelector("#humid-info")
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
//api.openweathermap.org/data/2.5/weather?q={city}&appid:{apiKey};
var start = function(){
    console.log("Line 10")
    var userInput = document.querySelector("#user-input").value
    var queryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=5&appid=${apiKey}`
    fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Make sure to look at the response in the console and read how 404 response is structured.
      console.log(data);
      getWeather(data[0])
    });
 }
 function getWeather(location) {
    console.log(location)
    var { lat, lon } = location // var lat = location.lat
    var city = location.name
    var queryURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
    fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Make sure to look at the response in the console and read how 404 response is structured.
      console.log(data);
      currentDay(data.list[0], city)
      fiveDayForecast(data.list)
    });
 }
 function currentDay(weather, city) {
    //Pull the data and create variables to do so
    console.log(weather)
    var temp = weather.main.temp
 }
 function fiveDayForecast(forecast) {
    //display the name of this box (fivedayForecast)
    //then do a for loop on forecast.length
    //Logic within is to call out a function that will display a card
    //copy current day card into function
 }