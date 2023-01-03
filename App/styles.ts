import styled from "styled-components/native"

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