const API_KEY = "API KEY";
function onGeoOk(position) {
  const lon = position.coords.longitude;
  const lat = position.coords.latitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
	const weatherContainer = document.querySelector("#weather span:first-child")
	const city = document.querySelector("#weather span:nth-child(2)")
      city.innerText = data.name;
      weatherContainer.innerText = `${data.weather[0].main}/${data.main.temp}℃`;
    });
}
function onGeoError() {
  alert("Can't find you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
