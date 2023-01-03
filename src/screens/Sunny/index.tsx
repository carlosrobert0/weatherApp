import { Text } from "react-native";
import { GraficSunriseAndSunset } from "../../components/GraficSunriseAndSunset";
import { CityName, Container, DegreesValue, DescriptionWeatherCurrent, Footer, IconLocation, IconRain, IconSunrise, IconSunset, IconUpdateLocation, IconWarning, IconWeatherCurrent, LabelAQ, LabelExpectingRainFall, LabelExpectingRainFallTime, LabelLenghtOfDay, LabelPercentualRain, LabelRemainingDayLight, LabelSunrise, LabelSunriseAndSunset, LabelSunset, LabelTimeSunrise, LabelTimeSunset, LabelUV, ScrollViewDetails, TextWarning, ValueAQ, ValueExpectingRainFallTime, ValuePercentualRain, ValueUV, ViewAQ, ViewDegrees, ViewDetailsRain, ViewDetailsWeather, ViewExpectingRainFall, ViewExpectingRainFallTime, ViewGraficSunriseAndSunset, ViewLocation, ViewPercentualRain, ViewRainFall, ViewSunrise, ViewSunriseAndSunset, ViewSunset, ViewUV, ViewWarning } from "./styles";

export default function Sunny() {
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

      <ScrollViewDetails>
        <ViewDegrees>
          <IconWeatherCurrent
            source={require('./../../assets/sun.png')}
          />
          <DescriptionWeatherCurrent>Clima ensolarado</DescriptionWeatherCurrent>
          <DegreesValue>31°</DegreesValue>
        </ViewDegrees>

        <ViewDetailsWeather>
          <ViewExpectingRainFallTime>
            <LabelExpectingRainFallTime>HORÁRIO</LabelExpectingRainFallTime>
            <ValueExpectingRainFallTime>11:00 AM</ValueExpectingRainFallTime>
          </ViewExpectingRainFallTime>

          <ViewUV>
            <LabelUV>UV</LabelUV>
            <ValueUV>4</ValueUV>
          </ViewUV>

          <ViewPercentualRain>
            <LabelPercentualRain>% CHUVA</LabelPercentualRain>
            <ValuePercentualRain>58%</ValuePercentualRain>
          </ViewPercentualRain>

          <ViewAQ>
            <LabelAQ>AQ</LabelAQ>
            <ValueAQ>22</ValueAQ>
          </ViewAQ>
        </ViewDetailsWeather>

        <ViewSunriseAndSunset>
          <LabelSunriseAndSunset>NASCER & PÔR DO SOL</LabelSunriseAndSunset>

          <ViewGraficSunriseAndSunset>
            <ViewSunrise>
              <LabelSunrise>Nascer do Sol</LabelSunrise>
              <LabelTimeSunrise>06:25 AM</LabelTimeSunrise>
            </ViewSunrise>

            <ViewSunset>
              <LabelSunset>Pôr do Sol</LabelSunset>
              <LabelTimeSunset>06:25 AM</LabelTimeSunset>
            </ViewSunset>
            <GraficSunriseAndSunset 
              iconName="clouds"
            />
          </ViewGraficSunriseAndSunset>

          <LabelLenghtOfDay>Tamanho do dia: 13H 12M</LabelLenghtOfDay>
          <LabelRemainingDayLight>Luz do dia restante: 13H 12M</LabelRemainingDayLight>
        </ViewSunriseAndSunset>
      </ScrollViewDetails>
      <Footer />
    </Container>
  )
}