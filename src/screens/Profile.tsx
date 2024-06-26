import { Center, Heading, ScrollView, Skeleton, Text, VStack, useToast } from "native-base";
import { useRef, useState } from "react";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { TouchableOpacity } from "react-native";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import * as ImagePicker from 'expo-image-picker';
import { useForm } from "react-hook-form";
import { useAuth } from "@hooks/useAuth";
import userAvatar from '@assets/userPhotoDefault.png'
import { api } from "@services/api";
import { UserDTO } from "@dtos/UserDTO";
import { storageUserSave } from "@storage/storageUser";
import mime from "mime";
type DataForm = {
  email: string;
  name: string;
}

export function Profile() {
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const { userData,setUserData } = useAuth();
  const toast = useToast()
  const [image, setImage] = useState<null | string>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DataForm>({
    defaultValues: {
      name: userData?.name,
      email: userData?.email
    }
  })

  const handleUserPhotoSelect = async () => {
    setIsLoadingImage(true)
    const photoSelected = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    

    if (!photoSelected.canceled) {
      setIsLoadingImage(false)
      setImage(photoSelected.assets[0].uri);
    }

   if(photoSelected.assets){
    const fileExtension  = photoSelected?.assets[0].uri.split('.').pop();

    const photoFile = {
    name: `${userData?.name}.${fileExtension}`.toLowerCase(),
    uri: photoSelected?.assets[0].uri,
    type: mime.getType(`${photoSelected.assets[0].uri}`)
    } as any;
    
    const uploadPhoto = new FormData();
    uploadPhoto.append('avatar', photoFile)


    try {
      const avatarResponse = await api.patch('/users/avatar', uploadPhoto, {
        headers: {
           accept: 'application/json',
          'Content-Type':'multipart/form-data'
        },
      })

      toast.show({
        title: 'Image alterada com sucesso !',
        placement: 'top-right',
        bgColor: 'green.600'
      })

      if(userData){
        const useAvatar = userData 

        useAvatar.avatar = avatarResponse.data.avatar;


        await storageUserSave(useAvatar);
        setUserData(useAvatar);
        await api.put(`/users`,useAvatar);

      }

     
    }
     catch (error) {
      toast.show({
        title: 'Erro ao alterar Imagem!',
        placement: 'top-right',
        bgColor: 'red.500'
      })
    }
   }

  
  };

  const handleUpdateUserData = async (data) => {
    try {
      const userDataUpdate= data
      userDataUpdate.name = data.name

      await storageUserSave(userDataUpdate);
      setUserData(userDataUpdate);
      await api.put(`/users`,data);

     toast.show({
      title: 'Dados alterado com sucesso!',
      placement: 'top-right',
      bgColor: 'green.600'
    })

    } catch (error) {
      toast.show({
        title: 'Erro ao alterar seus dados!',
        placement: 'top-right',
        bgColor: 'red.500'
      })
    }
  }


  return (
    <VStack flex={1} bg="gray.700">
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
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
              source={userData?.avatar ?{uri: `${api.defaults.baseURL}/avatar/${userData.avatar}`} : userAvatar}
              size={33}
              alt="user-profile" />
          )
          }


          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text color='green.500' fontWeight="bold" fontSize="md" mb={8}>Alterar foto</Text>
          </TouchableOpacity>

          <Input name="name" control={control} bg="gray.600" placeholder="Nome"/>
          <Input name='email'mt={4} control={control} bg="gray.600" placeholder="E-mail" isDisabled _disabled={{bg: "gray.400", opacity:0.4}}/>

        </Center>



        <VStack
        mt={6} px={10} mb={20}>
          
        <Heading fontSize="md" color="gray.200" mb={4}>Alterar senha</Heading>

        <Input name='password_old' control={control} bg="gray.600" placeholder="Senha antiga"  secureTextEntry />
          <Input name='new_password' mt={4} control={control} bg="gray.600" placeholder="Nova senha"  secureTextEntry />
          <Input name='password_confirmed'mt={4} control={control} bg="gray.600" placeholder="Confirme a nova senha"  secureTextEntry />

          <Button title="Atualizar" mt={4} onPress={handleSubmit(handleUpdateUserData)}/>

        </VStack>

        

      </ScrollView>

    </VStack>
  )
}