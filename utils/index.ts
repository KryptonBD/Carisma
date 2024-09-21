const API_KEY = process.env.API_KEY;
const API_HOST = process.env.API_HOST;

export const fetchCars = async () => {
  const headers = {
    "x-rapidapi-key": API_KEY!,
    "x-rapidapi-host": API_HOST!,
  };

  const URL = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";

  const response = await fetch(URL, {
    headers,
  });

  const result = await response.json();

  return result;
};

export const calculateCarRent = (cityMpg: number, year: number): number => {
  const currentYear = new Date().getFullYear();
  const carAge = currentYear - year;

  const BASE_PRICE_PER_DAY = 50;
  const MILEAGE_RATE_PER_MPG = 0.08; // Slightly reduced rate per MPG
  const AGE_RATE_PER_YEAR = 0.03; // Reduced rate for age

  // Cap city MPG effect at 40 for high-efficiency cars
  const mileageCost = Math.min(cityMpg, 40) * MILEAGE_RATE_PER_MPG;

  // Cap car age effect at 10 years
  const ageCost = Math.min(carAge, 10) * AGE_RATE_PER_YEAR;

  // Apply a 10% premium for cars less than 5 years old
  const premiumMultiplier = carAge < 5 ? 1.1 : 1.0;

  // Total rental cost per day
  const totalRentalRate =
    (BASE_PRICE_PER_DAY + mileageCost + ageCost) * premiumMultiplier;

  return Math.round(totalRentalRate);
};
