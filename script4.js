const defaultt = ()=>{

	let defCity = "delhi";
	getWeather(defCity);
}


const getWeather = (defCity) => {
	let city = null;
	if(defCity==null)
	 city = document.getElementById("city").value;
	else city = defCity;
	console.log(city);
	const fun = async function () {
		document.getElementById("cityName").innerHTML = city;
		// console.log(cityName);
		try {
			const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;

			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': '493a4a0ea7msh531c42d170b7434p172939jsnd30bc8b039b4',
					'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
				}

			};


			const response = await fetch(url, options);
			const result = await response.text();
			console.log(result);
			const result2 = JSON.parse(result);
			console.log(result2);
			temp.innerHTML = result2.temp;
			temp2.innerHTML = result2.temp;
			feels_like.innerHTML = result2.feels_like;
			humidity.innerHTML = result2.humidity;
			humidity2.innerHTML = result2.humidity;
			min_temp.innerHTML = result2.min_temp;
			max_temp.innerHTML = result2.max_temp;
			wind_speed.innerHTML = result2.wind_speed;
			wind_speed2.innerHTML = result2.wind_speed;
			wind_degrees.innerHTML = result2.wind_degrees;
			sunrise.innerHTML = result2.sunrise;
			sunset.innerHTML = result2.sunset;


		} catch (error) {
			console.error(error);
		}

	}

	fun();
}

// submit.addEventListener("click", () => {
// 	e.preventDeafault()
// 	getWeather(city.value);

// })


// getWeather();
defaultt();