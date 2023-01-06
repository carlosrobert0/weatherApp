import { getBottomSpace } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  margin-top: 24px;
  background: ${({ theme }) => theme.colors.background};
  justify-content: flex-start;
  align-items: center;
`

export const ViewDegrees = styled.View`
  width: 80%;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const IconWeatherCurrent = styled.Image`
  width: ${RFValue(185)}px;
  height: ${RFValue(185)}px;
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
})`
  margin-bottom: ${getBottomSpace() + 16}px;
`


export const ViewExpectingRainFall = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: ${RFValue(327)}px;
  height: ${RFValue(163)}px;
  background-color: ${({ theme }) => theme.colors.title};
  border-radius: 11px;
  padding: 16px 20px;
`

export const ViewRainFall = styled.View`
  width: ${RFValue(165)}px;
  height: ${RFValue(133)}px;
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
  width: ${RFValue(81)}px;
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
  width: ${RFValue(164)}px;;
  height: 43px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 25px;
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
  justify-content: space-between;
  margin-bottom: 8px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-radius: 11px;
  width: ${RFValue(327)}px;
  height: ${RFValue(59)}px;
  padding: 16px 20px;
`

export const ViewDetail = styled.View`
  width: 82px;
  height: 43px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LabelDetail = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.label};
  line-height: 18px;
`

export const ValueDetail: any = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 22.5px;
`

export const ViewSunriseAndSunset = styled.View`
  display: flex;
  justify-content: flex-start;
  margin-top: 8px;
  align-items: center;
  width: ${RFValue(327)}px;
  height: ${RFValue(176)}px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-radius: 11px;
  padding: 16px 20px;
`

export const LabelSunriseAndSunset = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.label};
  line-height: 18px;
  margin-bottom: 32px;
`

export const ViewGraficSunriseAndSunset = styled.View`
  width: ${RFValue(290)}px;
  height: ${RFValue(85)}px;;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`

export const ViewGrafic = styled.View`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
`

export const LabelGrafic = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.label};
`

export const ValueGrafic = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`

export const Label = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`

export const StrongLabel = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`

export const ViewDetailsLengthOfDay = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: ${RFValue(327)}px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-radius: 11px;
  padding: 16px 20px;
`