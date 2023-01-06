import { 
  Container, 
  DegreesValue, 
  RectangleWeatherCurrent, 
  ScrollViewDetails, 
  UnderlineWeatherCurrent, 
  ViewDegrees, 
  ViewDetailsSunriseAndSunset, 
  ViewDetailsWeather, 
  ViewSunriseAndSunset 
} from "./styles";

import { HeaderGetLocation } from "./../../components/HeaderGetLocation";

export default function Empty() {
  return (
    <Container>
      <HeaderGetLocation />

      <ScrollViewDetails>
        <ViewDegrees>
          <RectangleWeatherCurrent />
          <UnderlineWeatherCurrent>__ __</UnderlineWeatherCurrent>
          <DegreesValue>25</DegreesValue>
          <ViewDetailsWeather />
        </ViewDegrees>
        
        <ViewSunriseAndSunset />

        <ViewDetailsSunriseAndSunset />
      </ScrollViewDetails>
    </Container>
  )
}