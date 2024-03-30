import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import * as SplashScreen from 'expo-splash-screen';

import { NativeBaseProverUi } from 'src/theme';

import { StatusBar } from 'react-native';
import { Routes } from '@routes/index';
import { AuthContextProvider } from '@contexts/AuthContext';

SplashScreen.preventAutoHideAsync();



export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
    <NativeBaseProverUi>
      <AuthContextProvider>
      <StatusBar
      backgroundColor="transparent"
      translucent
      />
        <Routes />
        </AuthContextProvider>
    </NativeBaseProverUi>
  );
}

