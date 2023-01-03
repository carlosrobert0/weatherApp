import { Text } from "react-native";
import { CityName, Container, DegreesValue, DescriptionWeatherCurrent, IconLocation, IconUpdateLocation, IconWeatherCurrent, ViewDegrees, ViewLocation } from "./styles";

export default function HomeWithWarning() {
  return (
    <Container>
      <ViewLocation>
        <IconLocation
          source={require('./../../assets/location.png')}
        />
        <CityName>
          Espera Feliz, MG
        </CityName>
        <IconUpdateLocation
          source={require('./../../assets/loop.png')}
        />
      </ViewLocation>
      
      <ViewDegrees>
        <IconWeatherCurrent
          source={require('./../../assets/clouds.png')}
        />
        <DescriptionWeatherCurrent>Nuvens dispersas</DescriptionWeatherCurrent>
        <DegreesValue>31°</DegreesValue>
      </ViewDegrees>
    </Container>
  )
}