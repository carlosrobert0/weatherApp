import React, { useEffect } from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import Empty from './../screens/Empty';
import { useWeatherCurrent} from './../hooks/useWeatherCurrent';
import CurrentWeather from './../screens/CurrentWeather';

const { Navigator, Screen } = createStackNavigator()

export function StackRoutes() {
  const { currentWeather } = useWeatherCurrent()
  const main = currentWeather?.weather?.[0].main

  useEffect(() => {

  }, [main])
  
  return (
    <Navigator screenOptions={{ headerShown: false }} >
      {
        main ? (
          <Screen name="CurrentWeather" component={CurrentWeather} />
        ) : <Screen name="Empty" component={Empty} />
      }
    </Navigator>
  )
}