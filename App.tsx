import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { NativeBaseProverUi } from 'src/theme';
import { Center } from 'native-base';
import { SignIn } from '@screens/SignIn';
import { StatusBar } from 'react-native';


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
        <SignIn />
    </NativeBaseProverUi>
  );
}

