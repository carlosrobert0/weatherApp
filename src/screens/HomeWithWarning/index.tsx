import { GraficSunriseAndSunset } from "../../components/GraficSunriseAndSunset";
import { Container, DegreesValue, DescriptionWeatherCurrent, Footer, IconRain, IconWarning, IconWeatherCurrent, LabelAQ, LabelExpectingRainFall, LabelExpectingRainFallTime, LabelLenghtOfDay, LabelPercentualRain, LabelRemainingDayLight, LabelSunrise, LabelSunriseAndSunset, LabelSunset, LabelTimeSunrise, LabelTimeSunset, LabelUV, ScrollViewDetails, TextWarning, ValueAQ, ValueExpectingRainFallTime, ValuePercentualRain, ValueUV, ViewAQ, ViewDegrees, ViewDetailsRain, ViewDetailsWeather, ViewExpectingRainFall, ViewExpectingRainFallTime, ViewGraficSunriseAndSunset, ViewPercentualRain, ViewRainFall, ViewSunrise, ViewSunriseAndSunset, ViewSunset, ViewUV, ViewWarning } from "./styles";

export default function HomeWithWarning() {
  return (
    <Container>
      <ScrollViewDetails>
        <ViewDegrees>
          <IconWeatherCurrent
            source={require('./../../assets/rain.png')}
          />
          <DescriptionWeatherCurrent>Chuva intensa</DescriptionWeatherCurrent>
          <DegreesValue>31°</DegreesValue>
        </ViewDegrees>

        <ViewExpectingRainFall>
          <ViewRainFall>
            <ViewWarning>
              <IconWarning
                source={require('./../../assets/warning.png')}
              />
              <TextWarning>ATENÇÃO</TextWarning>
            </ViewWarning>

            <ViewDetailsRain>
              <ViewPercentualRain>
                <LabelPercentualRain>% CHUVA</LabelPercentualRain>
                <ValuePercentualRain>58%</ValuePercentualRain>
              </ViewPercentualRain>

              <ViewExpectingRainFallTime>
                <LabelExpectingRainFallTime>EXP. TEMPO</LabelExpectingRainFallTime>
                <ValueExpectingRainFallTime>02:00 PM</ValueExpectingRainFallTime>
              </ViewExpectingRainFallTime>
            </ViewDetailsRain>

            <LabelExpectingRainFall>Expectativa de chuva</LabelExpectingRainFall>
          </ViewRainFall>
          <IconRain
            source={require('./../../assets/rains.png')}
          />
        </ViewExpectingRainFall>

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