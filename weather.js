//Part 1 - displaying weather for Chicago
// let getWeather = function() {
//   let latitude = '41.8781';
//   let longitude = '-87.6298';
//   let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
//   openweathermap_api_url += 'lat=' + latitude
//   openweathermap_api_url += '&lon=' + longitude
//   openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'
//
//   fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
// }
// let link = document.getElementById("get_forecast")
//       link.addEventListener("click", getWeather);
//       // event.PreventDefault();
//
// let convertToJSON = function(response) {
//   return response.json();
// }
//
// let updateWeather = function (dataFromService) {
//   city = dataFromService.name;
//   temp = dataFromService.main.temp;
//   icon = dataFromService.weather[0].icon;
//   console.info(dataFromService)
//   document.querySelector('.card-title').innerHTML = city;
//   document.querySelector('.card-text').innerHTML = "It is "+ temp + " degrees outside";
//   document.querySelector('.card-img-top').src = "http://openweathermap.org/img/w/" + icon + ".png";
// }
//
//
// let displayError = function(error) {
//   console.debug(error);
//   window.alert("Sorry, something went wrong.");
// }

// Part 2 - displaying the user's actual location in the console

let getWeather = function() {
  let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  openweathermap_api_url += 'lat=' + latitude
  openweathermap_api_url += '&lon=' + longitude
  openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'
  console.debug("The Latitude is " + latitude);
  console.debug("The Longitude is " + longitude);
fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
}

function getGeoLocation (info) {
  latitude = info.coords.latitude.toFixed(4);
  longitude = info.coords.longitude.toFixed(4);
  getWeather()
}
  let link = document.getElementById("get_forecast")
         link.addEventListener("click", function(event) {
         event.preventDefault();
         navigator.geolocation.getCurrentPosition(getGeoLocation);
       });

let convertToJSON = function(response) {
  return response.json();
}

//Part 3 & 4

let updateWeather = function (dataFromService) {
  city = dataFromService.name;
  temp = dataFromService.main.temp;
  icon = dataFromService.weather[0].icon;
  console.info(dataFromService)
  document.querySelector(".card-title").innerHTML = city;
  document.querySelector(".card-text").innerHTML = "It is "+ temp + " degrees outside";
  document.querySelector('.card-img-top').src = "http://openweathermap.org/img/w/" + icon + ".png";
}


let displayError = function(error) {
  console.debug(error);
  window.alert("Sorry, something went wrong.");
}
