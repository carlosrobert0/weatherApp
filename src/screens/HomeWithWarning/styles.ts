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
  border: 1px solid ${({ theme }) => theme.colors.label};
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const CityName = styled.Text`
  color: ${({ theme }) => theme.colors.label};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const IconLocation = styled.Image`
  width: 24px;
  height: 24px;
  opacity: 0.7;
  margin-right: 8px;
`

export const IconUpdateLocation = styled.Image`
  width: 24px;
  height: 24px;
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

