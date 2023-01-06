import styled from 'styled-components/native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  width: 327px;
  height: 46px;
  margin-top: ${getBottomSpace() + 32}px;
  border-radius: 11px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

export const ViewLocationNameAndIcon = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const IconLocation = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`

export const CityName = styled.Text`
  color: ${({ theme }) => theme.colors.title_secondary};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 5px;
`

export const IconUpdateLocation = styled.Image`
  width: 20px;
  height: 20px;
`