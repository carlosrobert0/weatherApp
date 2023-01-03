import { ScrollView } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  margin-top: 24px;
  background: ${({ theme }) => theme.colors.background};
  justify-content: flex-start;
  align-items: center;
`

export const ViewLocation = styled.View`
  width: 327px;
  height: 46px;
  margin-top: 44px;
  /* border: 1px solid ${({ theme }) => theme.colors.label}; */
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.title_secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const CityName = styled.Text`
  color: ${({ theme }) => theme.colors.label};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 5px;
`

export const IconLocation = styled.Image`
  width: 17px;
  height: 17px;
  opacity: 0.7;
  margin-right: 8px;
`

export const IconUpdateLocation = styled.Image`
  width: 17px;
  height: 17px;
  opacity: 0.7;
  margin-left: 90px;
`

export const ViewDegrees = styled.View`
  width: 80%;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const IconWeatherCurrent = styled.Image`
  width: 135px;
  height: 123px;
  opacity: 0.8;
  margin-bottom: 32px;
`

export const DescriptionWeatherCurrent = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semi_bold};
  font-size: 30px;
  color: ${({ theme }) => theme.colors.title};
  line-height: 45px;
  text-align: center;
`

export const DegreesValue = styled.Text`
  font-size: 70px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  line-height: 105px;
  text-align: center;
`

export const ScrollViewDetails = styled.ScrollView.attrs({
  contentContainerStyle: {
    width: '100%',
    alignItems: 'center',
  },
  showsVerticalScrollIndicator: false
})``


export const ViewExpectingRainFall = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 327px;
  height: 163px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-radius: 11px;
`

export const ViewRainFall = styled.View`
  width: 165px;
  height: 133px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const IconRain = styled.Image`
  width: 95px;
  height: 98px;
  opacity: 0.5;
`

export const ViewWarning = styled.View`
  width: 81px;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 27px;
`

export const IconWarning = styled.Image`
  width: 15px;
  height: 15px;
`
export const TextWarning = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.warning};
  font-size: 12px;
`

export const ViewDetailsRain = styled.View`
  width: 164px;
  height: 43px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 25px;
`

export const ViewPercentualRain = styled.View`
  width: 73px;
  height: 43px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LabelPercentualRain = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.label};
  line-height: 18px;
`

export const ValuePercentualRain = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 22.5px;
`

export const ViewExpectingRainFallTime = styled.View`
  width: 78px;
  height: 43px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LabelExpectingRainFallTime = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.label};
  line-height: 18px;
`

export const ValueExpectingRainFallTime = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 22.5px;
`
export const LabelExpectingRainFall = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.warning};
  line-height: 22.5px;
`

export const ViewDetailsWeather = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 11px;
  align-items: center;
  width: 327px;
  height: 59px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-radius: 11px;
`

export const ViewUV = styled.View`
  width: 78px;
  height: 43px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LabelUV = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.label};
  line-height: 18px;
`

export const ValueUV = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 22.5px;
`

export const ViewAQ = styled.View`
  width: 78px;
  height: 43px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LabelAQ = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.label};
  line-height: 18px;
`

export const ValueAQ = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 22.5px;
`

export const ViewSunriseAndSunset = styled.View`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 33px;
  align-items: flex-start;
  width: 327px;
  height: 229px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-radius: 11px;
  padding: 15px 19px;
`

export const LabelSunriseAndSunset = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.label};
  line-height: 18px;
  margin-bottom: 32px;
`

export const ViewGraficSunriseAndSunset = styled.View`
  width: 290px;
  height: 99px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ViewSunrise = styled.View`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
`

export const LabelSunrise = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.label};
`

export const LabelTimeSunrise = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`

export const IconSunrise = styled.Image`
  width: 40px;
  height: 40px;
  opacity: 0.8;
`

export const ViewSunset = styled.View`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
`

export const LabelSunset = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.label};
`

export const LabelTimeSunset = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`

export const IconSunset = styled.Image`
  width: 40px;
  height: 40px;
  opacity: 0.9;
`

export const LabelLenghtOfDay = styled.Text`
  margin-top: 32px;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`

export const LabelRemainingDayLight = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  padding: 24px 24px ${getBottomSpace() + 48}px;
`