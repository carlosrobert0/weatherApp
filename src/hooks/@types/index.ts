import { ReactNode } from "react";

export interface AuthProviderProps {
  children: ReactNode;
}

export interface WeatherCurrentData {
  coord: {
    lon: number,
    lat: number
  },
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],
  base: string,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    sea_level: number,
    grnd_level: number
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number,
    gust: number
  },
  clouds: {
    all: number
  },
  dt: number,
  sys: {
    country: string,
    sunrise: number,
    sunset: number
  },
  rain?: {
    '1h': number,
  },
  timezone: number
  id: number
  name: string
  cod: number
}

export interface IAuthContextData {
  currentWeather: WeatherCurrentData | any;
  position: any;
  getCurrentWeatherWithLocation(latitude: string, longitude: string): Promise<any>
}