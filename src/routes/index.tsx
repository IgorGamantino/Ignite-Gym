import { NavigationContainer } from "@react-navigation/native";

import * as SplashScreen from 'expo-splash-screen';
import { AuthRoutes } from "./auth.routes";
import { Box } from "native-base";
import { AppRoutes } from "./app.routes";
import { useAuth } from "@hooks/useAuth";

export function Routes () {
  const {userData, userLoadingData} = useAuth();
 

  if(!userLoadingData){
    SplashScreen.hideAsync();
  }
  
  return (

    // adicionar essa box por volta do navigationContainer evitar aqueles bugs de tela branca, em um carregamento
    <Box flex={1} bg="gray.700">
    <NavigationContainer>
      {userData === null  ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
    </Box>
  )
}