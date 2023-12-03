const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=lamborghini';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8fd300d674msh629d5bc74711582p1f7ba3jsn67d446c2822b',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}