import { Center ,HStack,Heading,Icon,Text, VStack,Image,Box, useToast} from "native-base";
import { TouchableOpacity, TurboModuleRegistry } from "react-native";
import {Feather} from "@expo/vector-icons"
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";

import IconBody from "@assets/body.svg"
import SeriesIcon from '@assets/series.svg'
import RepetitionsIcon from "@assets/repetitions.svg"
import { Button } from "@components/Button";
import { useCallback, useEffect, useState } from "react";
import { api } from "@services/api";
import { Loading } from "@components/Loading";



type RouterParamsProps = {
  id: number
}



type ExerciseProps = {
  name: string;
  repetitions: number;
  series: number;
  demo: string;
  group: string;
}

export function Exercise () {
  const navigation = useNavigation();
  const [isLoading,setIsLoading]= useState(true)
  const [isLoadingSendRegister,setIsLoadingSendRegister]= useState(false)
  const [exerciseDetails,setExerciseDetails]= useState({} as ExerciseProps)
  const toast = useToast()

  const router = useRoute()

  const { id } = router.params as RouterParamsProps;


   useEffect(() => {

   async function getExerciseDetails(){
  
    try {
     const response =  await api.get(`/exercises/${id}`);

     console.log(response.data)

     setExerciseDetails(response.data)
    } catch (error) {

      console.log(error)
      
    }finally {
      setIsLoading(false)
    }
   }
    getExerciseDetails()
    }, [id])


function handleGoBack () {
    navigation.goBack()
}

async function handleExerciseHistoryRegister( ) {
    setIsLoadingSendRegister(true)
  try {
     await api.post(`/history`,{exercise_id: id});
  } catch (error) {
    toast.show({
      title: 'Erro ao registar o exercício!',
      placement: 'top-right',
      bgColor: 'red.500'
    })
  }
  finally {
    setIsLoadingSendRegister(false);

    toast.show({
      title: 'Exercício registrado com sucesso !',
      placement: 'top-right',
      bgColor: 'green.600'
    })
  }
}


if(isLoading) {
  return (
    <Box flex={1} pt={40} bg="gray.700">
        <Loading />
    </Box>
  )
}

  return (
    <VStack flex={1} bg="gray.700">
      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon 
           as={Feather}
           name="arrow-left"
           color="green.500"
           size={6}
          />
        </TouchableOpacity>

        <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
        <Heading color="gray.100" fontSize="lg" flexShrink={1}>{exerciseDetails.name}</Heading>

       <HStack alignItems="center">
        <IconBody />
        <Text color="gray.200" ml={1} textTransform="capitalize">{exerciseDetails.group}</Text>
       </HStack>
      </HStack>
      </VStack>



      <VStack p={8}>
        <Image 
        w="full"
        h={80}
        mb={3}
        resizeMode="cover"
        rounded="lg"
        source={{uri: `${api.defaults.baseURL}/exercise/demo/${exerciseDetails.demo}`}} 
        alt="puxada frontal"/> 

    <Box bg="gray.600" rounded="md" pb={4} px={4}>
      <HStack justifyContent='space-around' alignItems="center" mb={6} mt={5}>
      <HStack>
        <SeriesIcon />
        <Text color="gray.200" ml={2}>{exerciseDetails.series} series</Text>
      
      </HStack> 
      <HStack>
        <RepetitionsIcon />
        <Text color="gray.200" ml={2}>{exerciseDetails.repetitions} repetições</Text>
      </HStack>
      </HStack>
     
      <Button title="Marcar como realizado" onPress={handleExerciseHistoryRegister} isLoading={isLoadingSendRegister}/>

    </Box>


      </VStack>
    </VStack>
  )
}