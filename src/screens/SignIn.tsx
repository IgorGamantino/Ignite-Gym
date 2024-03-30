import { VStack, Text, Center, Heading, Image,ScrollView } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import * as yup from "yup"

import BackgroundImage from "@assets/background.png";


import LogoImage from "@assets/logo.svg"
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import { AuthNavigatorRoutesProps } from "@routes/auth.routes"
import { api } from "@services/api";
import { useState } from "react";
import { useAuth } from "@hooks/useAuth";

const signInSchema = yup.object({
  email: yup.string().required("Digite seu email").email("Digite um email valido"),
  password: yup.string().required("Digite sua senha")
})


type DataForm = {
  email: string;
  password: string;
}

export function SignIn() {
  const [isLoadingFetch, setIsLoadingFetch]= useState(false);
  const {signIn} = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DataForm>({
    resolver: yupResolver(signInSchema)
  })

  const handleSignIn = async ({email,password}:DataForm) => {
 
    setIsLoadingFetch(true)
   try {
     await signIn(email,password)
   } catch (error) {
      console.log(error)
   } finally{
     setIsLoadingFetch(false)
   }
  };

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
          
          control={control}
          name="email"
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          error={errors.email?.message}
        />
        <Input
          mt={4}
          
          control={control}
          name="password"
          placeholder="Senha"
          secureTextEntry
          error={errors.password?.message}
        />

        <Button mt={4} title="Acesar" onPress={handleSubmit(handleSignIn)} isLoading={isLoadingFetch}/>
      </Center>

      <Center mt={24}>
        <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">Ainda não tem acesso?</Text>

        <Button mt={4} title="Criar conta" variant="outline"  onPress={handleNavigationSignUp}/>
      </Center>
    </VStack>
    </ScrollView>
  )
}