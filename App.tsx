import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/hooks/useWeatherCurrent";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  )
}