import { HStack, Heading, Icon, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons"

import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";
import { useAuth } from "@hooks/useAuth";

import userAvatar from '@assets/userPhotoDefault.png'
import { clearStorageUserData } from "@storage/storageUser";
import { api } from "@services/api";

export function HomeHeader() {
  const {userData,setUserData} = useAuth();


  async function handleSignOut () {
     setUserData(null);
     await  clearStorageUserData()
  }


  console.log(userData?.avatar)

  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        mr={4}
        size={16}
        source={userData?.avatar ? {uri: `${api.defaults.baseURL}/avatar/${userData.avatar}`}: userAvatar}
        alt="image-user" />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">Ola</Text>

        <Heading color="gray.100" fontSize="md">{userData?.name}</Heading>
      </VStack>

      <TouchableOpacity onPress={handleSignOut}>
        <Icon
          as={MaterialIcons}
          name="logout"
          color="gray.200"
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  )
}