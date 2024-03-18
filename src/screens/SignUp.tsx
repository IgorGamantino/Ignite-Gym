import { VStack, Text, Center, Heading, Image,ScrollView } from "native-base"

import BackgroundImage from "@assets/background.png"

import LogoImage from "@assets/logo.svg"
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import { useNavigation } from "@react-navigation/native"
import { AuthNavigatorRoutesProps } from "@routes/auth.routes"

export function SignUp() {


  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNavigationSignIn () {
    navigation.navigate("signIn")
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
         Crie sua conta
        </Heading>

        <Input
          placeholder="Nome"
          keyboardType="default"
        />

        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          placeholder="Senha"
          secureTextEntry
        />

        <Button title="Criar e acessar" />
      </Center>

      <Center mt={24}>

        <Button mt={4} title="Voltar para o login" variant="outline" onPress={handleNavigationSignIn} />
      </Center>
    </VStack>
    </ScrollView>
  )
}