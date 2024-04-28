import { CarProps, FilterProps } from "@/types"
import { useSearchParams } from "next/navigation";

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;
  
    // Set the required headers for the API request
    const headers: HeadersInit = {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_CAR_KEY || "",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };
  
    // Set the required headers for the API request
    const response = await fetch(
       `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
      {
        headers: headers,
      }
    );

    const result = await response.json();

    return result;
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

export const fetchCarImages = (car:CarProps, angle?:string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const {make,year,model} = car

    url.searchParams.append('customer','hrjavascript-mastery');
    url.searchParams.append('make',make);
    url.searchParams.append('modelFamily',model.split(' ')[0]);
    url.searchParams.append('zoomType','fullscreen');
    url.searchParams.append('modelYear',`${year}`);
    url.searchParams.append('angle',`${angle}`); 

    return `${url}`;
}

export const updateSearchParams = (type:string,value:string) => {
  const searchParams =new URLSearchParams(window.location.search);

  searchParams.set(type,value);
  
  const newPathName = `${window.location.pathname}?${searchParams.toString()}`

  return newPathName;
}