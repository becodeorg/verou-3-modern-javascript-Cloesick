import {fetchWeatherData} from './index.js';
const fetchCoordinates = (inputCity) => {
	// const inputCity = form.value
fetch(
	"http://api.openweathermap.org/geo/1.0/direct?q=" +
		inputCity +
		"&appid=687a0170dedccd305846958f004f8301"
)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		const latitude = data[0].lat;
		const longitude = data[0].lon;
		//API call with coordinates
		fetchWeatherData(latitude, longitude); //refers to the function fetchWeatherData
	});
};

export {fetchCoordinates};
