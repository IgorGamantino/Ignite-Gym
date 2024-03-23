import { Center, ScrollView, Skeleton, Text, VStack } from "native-base";
import { useState } from "react";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { TouchableOpacity } from "react-native";
import { Input } from "@components/Input";

export function Profile() {
  const [isLoadingImage, setIsLoadingImage] = useState(false)


  return (
    <VStack flex={1} bg="gray.700">
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>3
          {isLoadingImage ? (
            <Skeleton
              w={33}
              h={33}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UserPhoto
              source={{ uri: "https://avatars.githubusercontent.com/u/65914646?v=4" }}
              size={33}
              alt="user-profile" />
          )
          }


          <TouchableOpacity>
            <Text color='green.500' fontWeight="bold" fontSize="md" mb={8}>Alterar foto</Text>
          </TouchableOpacity>

          <Input bg="gray.600" placeholder="Nome"/>
          <Input  bg="gray.600" placeholder="E-mail" isDisabled _disabled={{bg: "gray.500", opacity:0.5}}/>

        </Center>


        

      </ScrollView>

    </VStack>
  )
}