import { Center ,HStack,Heading,Icon,Text, VStack,Image,Box} from "native-base";
import { TouchableOpacity } from "react-native";
import {Feather} from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";

import IconBody from "@assets/body.svg"
import SeriesIcon from '@assets/series.svg'
import RepetitionsIcon from "@assets/repetitions.svg"
import { Button } from "@components/Button";


export function Exercise () {
  const navigation = useNavigation()


function handleGoBack () {
    navigation.goBack()
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
        <Heading color="gray.100" fontSize="lg" flexShrink={1}>Puxada frontal</Heading>

       <HStack alignItems="center">
        <IconBody />
        <Text color="gray.200" ml={1} textTransform="capitalize">costas</Text>
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
        source={{uri: "https://i.ytimg.com/vi/mv0mkX8hz5I/maxresdefault.jpg"}} 
        alt="puxada frontal"/> 

    <Box bg="gray.600" rounded="md" pb={4} px={4}>
      <HStack justifyContent='space-around' alignItems="center" mb={6} mt={5}>
      <HStack>
        <SeriesIcon />
        <Text color="gray.200" ml={2}>3 series</Text>
      
      </HStack> 
      <HStack>
        <RepetitionsIcon />
        <Text color="gray.200" ml={2}>12 repetições</Text>
      </HStack>
      </HStack>
     
      <Button title="Marcar como realizado" />

    </Box>


      </VStack>
    </VStack>
  )
}