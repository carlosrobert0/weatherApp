import {
  Container,
  DegreesValue,
  DescriptionWeatherCurrent,
  IconRain,
  IconWarning,
  IconWeatherCurrent,
  Label,
  LabelDetail,
  LabelExpectingRainFall,
  LabelGrafic,
  LabelSunriseAndSunset,
  ScrollViewDetails,
  StrongLabel,
  TextWarning,
  ValueDetail,
  ValueGrafic,
  ViewDegrees,
  ViewDetail,
  ViewDetailsLengthOfDay,
  ViewDetailsRain,
  ViewDetailsWeather,
  ViewExpectingRainFall,
  ViewGrafic,
  ViewGraficSunriseAndSunset,
  ViewRainFall,
  ViewSunriseAndSunset,
  ViewWarning
} from "./styles";

import { GraficSunriseAndSunset } from "./../../components/GraficSunriseAndSunset";
import { HeaderLocation } from "./../../components/HeaderLocation";
import { useWeatherCurrent } from "./../../hooks/useWeatherCurrent";

export default function CurrentWeather() {
  const { currentWeather } = useWeatherCurrent()

  const weather = currentWeather?.weather?.[0]

  const {
    humidity, temp_min, temp_max, feels_like
  } = currentWeather?.main

  const { main, description, icon } = weather

  const degress = Math.round(currentWeather?.main?.temp - 273.15)
  const feels_like_rounded = Math.round(feels_like - 273.15)
  const tempMin = Math.round(temp_min - 273.15)
  const tempMax = Math.round(temp_max - 273.15)
  const rain = currentWeather?.rain

  const sunriseDate = new Date(currentWeather?.sys?.sunrise * 1000)
    .toLocaleTimeString('pt-BR', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    })

  const sunsetDate = new Date(currentWeather?.sys?.sunset * 1000)
    .toLocaleTimeString('pt-BR', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    })

  const differenceBetweenSunriseAndSunsetTime = currentWeather?.sys?.sunset - currentWeather?.sys?.sunrise

  const leghtOfDay = new Date(differenceBetweenSunriseAndSunsetTime * 1000)
    .toLocaleTimeString('pt-BR', {
      hour: 'numeric',
      minute: 'numeric',
    })

  return (
    <Container>
      <HeaderLocation />

      <ScrollViewDetails>
        <ViewDegrees>
          <IconWeatherCurrent
            resizeMode="contain"
            source={{
              uri: `https://openweathermap.org/img/wn/${icon}@2x.png`
            }}
          />
          <DescriptionWeatherCurrent>{description}</DescriptionWeatherCurrent>
          <DegreesValue>{degress}°</DegreesValue>
        </ViewDegrees>

        {
          main === 'Rain' && (
            <ViewExpectingRainFall>
              <ViewRainFall>
                <ViewWarning>
                  <IconWarning
                    source={require('./../../assets/warning.png')}
                  />
                  <TextWarning>ATENÇÃO</TextWarning>
                </ViewWarning>

                <ViewDetailsRain>
                  <ViewDetail>
                    <LabelDetail>CHUVA</LabelDetail>
                    <ValueDetail>{rain?.['1h']}mm</ValueDetail>
                  </ViewDetail>

                  <ViewDetail>
                    <LabelDetail>TEMPO</LabelDetail>
                    <ValueDetail>1H</ValueDetail>
                  </ViewDetail>
                </ViewDetailsRain>

                <LabelExpectingRainFall>Expectativa de chuva</LabelExpectingRainFall>
              </ViewRainFall>
              <IconRain
                source={require('./../../assets/rains.png')}
              />
            </ViewExpectingRainFall>
          )
        }

        <ViewDetailsWeather>
          <ViewDetail>
            <LabelDetail>Umidade</LabelDetail>
            <ValueDetail>{humidity}%</ValueDetail>
          </ViewDetail>

          <ViewDetail>
            <LabelDetail>Min</LabelDetail>
            <ValueDetail>{tempMin}°</ValueDetail>
          </ViewDetail>

          <ViewDetail>
            <LabelDetail>Max</LabelDetail>
            <ValueDetail>{tempMax}°</ValueDetail>
          </ViewDetail>

          <ViewDetail>
            <LabelDetail>Sensação</LabelDetail>
            <ValueDetail>{feels_like_rounded}°</ValueDetail>
          </ViewDetail>
        </ViewDetailsWeather>

        <ViewSunriseAndSunset>
          <LabelSunriseAndSunset>NASCER & PÔR DO SOL</LabelSunriseAndSunset>

          <ViewGraficSunriseAndSunset>
            <ViewGrafic>
              <LabelGrafic>Nascer do Sol</LabelGrafic>
              <ValueGrafic>{sunriseDate}</ValueGrafic>
            </ViewGrafic>

            <ViewGrafic>
              <LabelGrafic>Pôr do Sol</LabelGrafic>
              <ValueGrafic>{sunsetDate}</ValueGrafic>
            </ViewGrafic>
            <GraficSunriseAndSunset />
          </ViewGraficSunriseAndSunset>
        </ViewSunriseAndSunset>

        <ViewDetailsLengthOfDay>
          <Label>Tamanho do dia: <StrongLabel>{leghtOfDay}H</StrongLabel></Label>
        </ViewDetailsLengthOfDay>
      </ScrollViewDetails>
    </Container>
  )
}