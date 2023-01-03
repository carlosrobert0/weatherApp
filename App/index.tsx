import React from "react";
import { StatusBar, Text } from "react-native";
import { ThemeProvider } from "styled-components";
import HomeWithWarning from "./../src/screens/HomeWithWarning";
import { CityName, IconLocation, IconUpdateLocation, ViewLocation } from "./styles";
import theme from "./../src/styles/theme";

const main = 'cloud'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <ViewLocation>
        <IconLocation
          source={require('./../../assets/location.png')}
        />
        <CityName>
          Espera Feliz, MG
        </CityName>
        <IconUpdateLocation
          source={require('./../src/assets/loop.png')}
        />
      </ViewLocation>
      <HomeWithWarning />
    </ThemeProvider>
  )
}