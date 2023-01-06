import {
  IconWeather,
  Container,
  Line1,
  Line2,
  Line3,
  Vector,
  Vector1
} from "./styles";

import { useWeatherCurrent } from "./../../hooks/useWeatherCurrent";

export function GraficSunriseAndSunset() {
  const { currentWeather } = useWeatherCurrent()
  const { icon } = currentWeather?.weather?.[0]

  return (
    <Container>
      <Vector source={require("./../../assets/grafic/vector.png")} />
      <Vector1 source={require("./../../assets/grafic/vector1.png")} />
      <Line1 source={require("./../../assets/grafic/line1.png")} />
      <Line2 source={require("./../../assets/grafic/line2.png")} />
      <Line3 source={require("./../../assets/grafic/line3.png")} />
      <IconWeather
        source={{
          uri: `https://openweathermap.org/img/wn/${icon}@2x.png`
        }}
      />
    </Container>
  )
}