import { useWeatherCurrent } from "./../../hooks/useWeatherCurrent";

import {
  Container,
  IconLocation,
  CityName
} from "./styles";

export function HeaderGetLocation() {
  const { getCurrentWeatherWithLocation, position } = useWeatherCurrent()
  return (
    <Container onPress={() => 
      getCurrentWeatherWithLocation(position?.coords?.latitude, position?.coords?.longitude)}
    >
      <CityName>
        Use sua localização
      </CityName>
      <IconLocation
        source={require('./../../assets/location.png')}
      />
    </Container>
  )
}