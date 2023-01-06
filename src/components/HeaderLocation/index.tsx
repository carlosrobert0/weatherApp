import { TouchableOpacity } from "react-native-gesture-handler";

import { 
  Container, 
  ViewLocationNameAndIcon,
  IconLocation,
  CityName,
  IconUpdateLocation
} from "./styles";

import { useWeatherCurrent } from "./../../hooks/useWeatherCurrent";

export function HeaderLocation() {
  const { currentWeather, getCurrentWeatherWithLocation, position } = useWeatherCurrent()

  return (
    <Container>
      <ViewLocationNameAndIcon>
        <IconLocation
          source={require('./../../assets/location.png')}
        />
        <CityName>
          {currentWeather?.name}
        </CityName>
      </ViewLocationNameAndIcon>
      <TouchableOpacity onPress={() => 
        getCurrentWeatherWithLocation(position?.coords?.latitude, position?.coords?.longitude)}
      >
        <IconUpdateLocation
          source={require('./../../assets/loop.png')}
        />
      </TouchableOpacity>
    </Container>
  )
}