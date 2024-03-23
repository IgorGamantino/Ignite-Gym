import { VStack, Text, Center, Heading, Image,ScrollView } from "native-base"
import { useNavigation } from "@react-navigation/native"
import BackgroundImage from "@assets/background.png"

import LogoImage from "@assets/logo.svg"
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import { AuthNavigatorRoutesProps } from "@routes/auth.routes"


export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNavigationSignUp () {
    navigation.navigate("signUp")
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
    <VStack flex={1} bg="gray.700" px={10}>
      <Image source={BackgroundImage} defaultSource={BackgroundImage} alt="Peoples train" resizeMode="contain" position="absolute" />
      <Center my={24}>
        <LogoImage />
        <Text color="gray.100" fontSize="sm">Treine sua mente e o seu corpo </Text>
      </Center>

      <Center>
        <Heading color="gray.100" fontSize="xl" mb={6}>
          Acesse sua conta
        </Heading>

        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          placeholder="Senha"
          secureTextEntry
        />

        <Button title="Acesar" />
      </Center>

      <Center mt={24}>
        <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">Ainda não tem acesso?</Text>

        <Button mt={4} title="Criar conta" variant="outline"  onPress={handleNavigationSignUp}/>
      </Center>
    </VStack>
    </ScrollView>
  )
}