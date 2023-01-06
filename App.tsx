import React from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import { Routes } from "./src/routes";
import { WeatherProvider } from "./src/hooks/useWeatherCurrent";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle="dark-content"
        translucent
      />

      <WeatherProvider>
        <Routes />
      </WeatherProvider>
    </ThemeProvider>
  )
}