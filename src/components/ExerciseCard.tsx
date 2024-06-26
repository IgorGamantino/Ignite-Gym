import { HStack, Heading, Image, Text, VStack, Icon } from "native-base";
import { TouchableOpacity,TouchableOpacityProps } from "react-native";

import { Entypo} from "@expo/vector-icons"
import { api } from "@services/api";
interface ExerciseCardProps extends TouchableOpacityProps{ 
  title:string
  image?: string;
  serie: number;
  repetition: number
}


export function ExerciseCard({title,image,serie,repetition,...rest}:ExerciseCardProps) {


  return (
    <TouchableOpacity {...rest}>
      <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
        <Image 
        w={67}
        h={67}
        mr={4}
        resizeMode="cover"
        rounded="md"
        source={image ? {uri: `${api.defaults.baseURL}/exercise/thumb/${image}`} :  {uri: "https://i.ytimg.com/vi/mv0mkX8hz5I/maxresdefault.jpg"}} 
        alt="puxada frontal"/> 

        <VStack flex={1}>
          <Heading  color="white" fontSize="lg">{title}</Heading>
          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>{serie} séries x {repetition} repetições</Text>

        </VStack>

        <Icon
        as={Entypo}
        h={24}
        w={24}
        name="chevron-small-right"
        color="gray.300"
        
        />
      </HStack>
    </TouchableOpacity>
  )
}