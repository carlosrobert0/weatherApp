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

export const ViewDegrees = styled.View`
  width: 80%;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const RectangleWeatherCurrent = styled.View`
  width: 147px;
  height: 132px;
  background-color: ${({ theme }) => theme.colors.label};
`

export const UnderlineWeatherCurrent = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semi_bold};
  font-size: 30px;
  color: ${({ theme }) => theme.colors.label};
  line-height: 45px;
  text-align: center;
`

export const DegreesValue = styled.Text`
  font-size: 70px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.label};
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

export const ViewDetailsWeather = styled.View`
  width: 327px;
  height: 59px;
  background-color: ${({ theme }) => theme.colors.label};
  border-radius: 11px;
  margin-bottom: 31px;
`

export const ViewSunriseAndSunset = styled.View`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
  align-items: flex-start;
  width: 327px;
  height: 240px;
  background-color: ${({ theme }) => theme.colors.label};
  border-radius: 11px;
  padding: 15px 19px;
`

export const ViewDetailsSunriseAndSunset = styled.View`
  width: 327px;
  height: 75px;
  background-color: ${({ theme }) => theme.colors.label_secondary};
  border-radius: 11px;
`