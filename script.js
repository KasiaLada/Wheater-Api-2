const input = document.querySelector('input');
const button = document.querySelector('button');
const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=a6b2bafbe52688431a3be676544999ee';
const API_UNITS = '&units=metric';

const getWeather = () => {
	const city = input.value || 'London';
	const URL = API_LINK + city + API_KEY + API_UNITS;

	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);

            
		})
        .catch(() => (warning.textContent = 'Wpisz poprawną nazwę miasta'));
};

getWeather();
button.addEventListener('click', getWeather);
