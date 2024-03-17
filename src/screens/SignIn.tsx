import { VStack, Text, Center, Heading, Image } from "native-base"

import BackgroundImage from "@assets/background.png"

import LogoImage from "@assets/logo.svg"
import { Input } from "@components/Input"

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700" px={10}>
      <Image source={BackgroundImage} alt="Peoples train" resizeMode="contain" position="absolute" />
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
          key="email-address"
          autoCapitalize="none"
        />
        <Input
          placeholder="Senha"
          secureTextEntry
        />
      </Center>

    </VStack>
  )
}