import { VStack, Text, Center, Heading, Image,ScrollView } from "native-base"
import { useNavigation } from "@react-navigation/native"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

import BackgroundImage from "@assets/background.png"
import LogoImage from "@assets/logo.svg"

import { Input } from "@components/Input"
import { Button } from "@components/Button"

import { AuthNavigatorRoutesProps } from "@routes/auth.routes"


const signUpSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("E-mail é obrigatório").email("Digite um email valido"),
  password: yup.string().required("Senha é obrigatório"),
  password_confirmed: yup.string()
  .oneOf([yup.ref("password")], "A senhas devem ser iguais")
  .required("Confirmação da senha é obrigatório"),
})


export function SignUp() {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver:yupResolver(signUpSchema)
  })
  const onSubmit = (data) => console.log(data)
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
          name="name"
          error={errors.name?.message}
          control={control}
          placeholder="Nome"
          keyboardType="default"
        />

        <Input
          mt={4}
          control={control}
          name="email"
          error={errors.email?.message}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          mt={4}
          control={control}
          error={errors.password?.message}
          name="password"
          placeholder="Senha"
          secureTextEntry
        />
        <Input
          mt={4}
          control={control}
          error={errors.password_confirmed?.message}
          name="password_confirmed"
          placeholder="Confirme sua senha"
          secureTextEntry
        />

        <Button mt={4} title="Criar e acessar" onPress={handleSubmit(onSubmit)}/>
      </Center>

      <Center mt={24}>

        <Button mt={4} title="Voltar para o login" variant="outline" onPress={handleNavigationSignIn} />
      </Center>
    </VStack>
    </ScrollView>
  )
}