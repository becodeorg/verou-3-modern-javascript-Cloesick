export { fetchCoordinates };

const fetchCoordinates = (inputCity) => {
	// const inputCity = form.value
	const getCoordinates = fetch(
		"http://api.openweathermap.org/geo/1.0/direct?q=" +
			inputCity +
			"&appid=a790165930e5b592de2330f642ceff0c"
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

export {fetchWeatherData};

const fetchWeatherData = (lat, long) => {
    const getWeatherData = fetch ("https://api.openweathermap.org/data/2.5/onecall?lat="+ lat + "&lon=" + long + "&units=metric" + "&appid=a790165930e5b592de2330f642ceff0c")
        .then(response => response.json())
        .then(data => {// data = the whole data fetched from the API.
            console.log(data)
            const dailyWeather8 = data.daily;//array of 8 objects. Objects are the weatherinfo per day.
            const dailyWeather5 = dailyWeather8.slice(0, 5);//takes the first 5 objects of the array above starting from position 0.
            const mainHtml = document.querySelector('#card');
            for (let day of dailyWeather5) {
                createDay(mainHtml, day); //refers to the function createDay
            }
        })
}