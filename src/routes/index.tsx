import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { Box } from "native-base";

export function Routes () {
  return (

    // adicionar essa box por volta do navigationContainer evitar aqueles bugs de tela branca, em um carregamento
    <Box flex={1} bg="gray.700">
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
    </Box>
  )
}