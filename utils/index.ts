export async function fetchCars(){
    const headers = {
        'X-RapidAPI-Key': '8fd300d674msh629d5bc74711582p1f7ba3jsn67d446c2822b',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',{headers: headers})
    const result = await response.json()

    return result
}