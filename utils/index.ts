export async function fetchCars(){
    const headers = {
        'X-RapidAPI-Key': '8fd300d674msh629d5bc74711582p1f7ba3jsn67d446c2822b',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{headers: headers})
    const result = await response.json()

    return result
}

export const CalculateCarRent = (city_mpg: number, year:number) => {
    const basePricePerDay = 50; // Base rental price per day
    const mileageFactor = 0.1; // Additional rater per mile driven
    const ageFactor = 0.05; // Additional rater per mile driven

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay * mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}