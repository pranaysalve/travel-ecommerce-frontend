// const fetch = require("node-fetch");
import { BASE_URL } from "@/constants";
import { CarProps, FilterProps } from "@/types";
import { Tours } from "../data/data";
const TourURL = "http://localhost:8000/api/v1";
const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3";
// const options = {
//   method: "GET",
// };

export async function fetchCars(filters: FilterProps) {
  const { fuel, manufacturer, limit, year, model } = filters;

  const headers = {
    "X-RapidAPI-Key": "5bf56a6612mshc67dd542667124dp1ca126jsnbbacc2f4b03d",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = fetch(
    url.concat(
      `?fuel_type=${fuel}&manufacturer=${manufacturer}&limit=${limit}&year=${year}&model=${model}`
    ),
    {
      headers: headers,
    }
  );

  const result = (await response).json();

  return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append("customer", "hrjavascript-mastery" || "");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const fetchTours = async () => {
  const doc = await fetch(`${TourURL}/tours`);

  const someData = await doc.json();

  return someData.data.data;
};

export const fetchCart = async (userid: string) => {
  const doc = await fetch(`${TourURL}/cart/${userid}`);
  const somedata = await doc.json();
  return somedata.data.data;
};

export const addCart = async (id: string[]) => {
  const cartData = await fetch(`${TourURL}/cart`, {
    method: "POST",
    body: JSON.stringify(id),
  });

  const doc = await cartData.json();
  console.log({ doc });
  return doc;
};
