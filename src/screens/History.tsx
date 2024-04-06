import { Loading } from "@components/Loading";
import { ScreenHeader } from "@components/ScreenHeader";
import { api } from "@services/api";
import { VStack, Text, HStack, Heading, SectionList, useToast } from "native-base";
import React, { useEffect, useState } from "react";


type ExerciseProps = {
    id: string;
    name: string;
    group: string;
    hour: string;
    date: string
}

type ListExerciseProps = {
  title: string;
  data: ExerciseProps[]
  
}

export function History() {
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(true);
  const [listExercise, setListExercise]= useState<ListExerciseProps[]>([])

  
  
useEffect(() => {

  async function getHistoryExercise() {
    
    try {
      const response = await api.get('/history');

      if(response.data){
        setListExercise(response.data)
      }
    } catch (error) {
      console.log(error)
      toast.show({
        title: 'Erro carregar histórico de exercícios',
        placement: 'top-right',
        bgColor: 'red.500'
      })
    }
    finally {
      setIsLoading(false)
    }
  }
  getHistoryExercise()
}, [])


  
const CardHistory = (item:ExerciseProps) => {


  return (
  <HStack w="full" px={5} py={4} mb={3} bg="gray.600" rounded="md" alignItems='center' justifyContent="space-between">
        <VStack mr={5} flex={1}>
          <Heading color="white" fontSize='md' textTransform="capitalize" numberOfLines={1}>{item.group}</Heading>
          <Text color="gray.100" fontSize="lg" numberOfLines={1}>{item.name}</Text>
        </VStack>

        <Text color="gray.300" fontSize="md">{item.hour}</Text>
      </HStack>
  )
}

  return (
    <VStack flex={1} bg="gray.700">
      <ScreenHeader title="Historico de exercicios"/>

     {isLoading ? (
       <Loading />
      )
      :(<SectionList 
        px={6}
        sections={listExercise}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CardHistory {...item}/>}
        ListEmptyComponent={() => <Text color="gray.100" textAlign="center" mt={10}>Não ha exercícios registrados ainda.
          Vamos fazer exercícios hoje?
        </Text>}
        renderSectionHeader={(item) => (<Heading color="gray.200" fontSize="md" mb={4} mt={10}>{item.section.title}</Heading>)}
      />)}
    </VStack>
  )
}