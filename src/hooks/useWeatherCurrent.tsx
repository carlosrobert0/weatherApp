import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import { PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from "@react-native-async-storage/async-storage";

import Config from "react-native-config";

import {
  AuthProviderProps,
  IAuthContextData,
  WeatherCurrentData
} from "./@types";

import { api } from "../services/api";

const AuthContext = createContext({} as IAuthContextData)

function WeatherProvider({ children }: AuthProviderProps) {
  const weatherStorageKey = '@weatherApp:weather'
  const apiKey = Config.API_KEY
  
  const [currentWeather, setCurrentWeather] = useState({} as WeatherCurrentData)

  const [position, setPosition] = useState()

  async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'This app needs access to your location in order to get your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        return true
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  async function getLocation() {
    try {
      Geolocation.getCurrentPosition(
        (position: any) => {
          setPosition(position)
        },
        error => console.log(error),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );
    } catch (error) {
      console.log(error)
    }
  };

  async function getCurrentWeather(latitude: string, longitude: string) {
    try {
      const response = await api.get(`weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=pt_br`)
      
      setCurrentWeather(response.data)
      await AsyncStorage.setItem(weatherStorageKey, JSON.stringify(response.data))
    } catch (error) {
      console.log(error)
    }
  }

  async function getCurrentWeatherWithLocation(latitude: string, longitude: string) {
    const hasPermission = await requestLocationPermission();

    if (!hasPermission) {
      return
    }

    await getLocation()
    await getCurrentWeather(latitude, longitude)
  }

  useEffect(() => {
    async function loadWeatherStorageData() {
      const weatherStoraged = await AsyncStorage.getItem(weatherStorageKey)

      if (weatherStoraged) {
        const weatherCurrentStorage = JSON.parse(weatherStoraged) as WeatherCurrentData
        setCurrentWeather(weatherCurrentStorage)
      }
    }
    
    loadWeatherStorageData()
  }, [weatherStorageKey, currentWeather])

  return (
    <AuthContext.Provider value={{
      getCurrentWeatherWithLocation,
      position,
      currentWeather,
    }}>
      {children}
    </AuthContext.Provider >
  )
}

function useWeatherCurrent() {
  const context = useContext(AuthContext)

  return context
}

export { WeatherProvider, useWeatherCurrent }