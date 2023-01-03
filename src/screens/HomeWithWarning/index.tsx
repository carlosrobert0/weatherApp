import { Text } from "react-native";
import { CityName, Container, ViewLocation } from "./styles";

export default function HomeWithWarning() {
  return (
    <Container>
      <ViewLocation>
        <CityName>
          Espera Feliz, MG
        </CityName>
        {/* <Icon name="location" /> */}
      </ViewLocation>
    </Container>
  )
}