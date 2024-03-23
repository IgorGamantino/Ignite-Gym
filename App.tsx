import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { NativeBaseProverUi } from 'src/theme';

import { StatusBar } from 'react-native';
import { Routes } from '@routes/index';


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
      <StatusBar
      backgroundColor="transparent"
      translucent
      />
        <Routes />
    </NativeBaseProverUi>
  );
}

