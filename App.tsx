import { StatusBar, Text } from "react-native";
import { ThemeProvider } from "styled-components";
import HomeWithWarning from "./src/screens/HomeWithWarning";
import theme from "./src/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <HomeWithWarning />
    </ThemeProvider>
  )
}