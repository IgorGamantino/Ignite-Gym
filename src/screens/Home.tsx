import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { Center, FlatList, HStack, Heading, Text, VStack, useToast } from "native-base";
import { useCallback, useEffect, useState } from "react";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { api } from "@services/api";
import { Loading } from "@components/Loading";

type ListExercisesProps = {
   id: number;
   name: string;
   repetitions: number;
   series: number;
   thumb: string;
}

export function Home() {
  const [groups, setGroups] = useState<string[]>([])
  const [groupSelected, setGroupSelected] = useState('');
  const [listExercises,setListExercises] = useState<ListExercisesProps[]>([])
  const toast = useToast()
  const navigation = useNavigation<AppNavigatorRoutesProps>();

console.log(listExercises)
  useEffect(() => {
    async function getExercisesGroup() {
      try {
        const response = await api.get('/groups')
      
        if(response.data){
          setGroups(response.data)
          setGroupSelected(response.data[0])
        }
        
      } catch (error) {
        toast.show({
          title: 'Erro ao buscar os grupo de exercícios!',
          placement: 'top-right',
          bgColor: 'red.500'
        })
      }
    }

      getExercisesGroup()
  }, [])


 useFocusEffect(useCallback(() => {
   async function getExercisesByGroup(){
    try {
       const response = await api.get(`/exercises/bygroup/${groupSelected}`);
        setListExercises(response.data)

    } catch (error) {

      toast.show({
        title: 'Erro ao buscar os grupo de exercícios!',
        placement: 'top-right',
        bgColor: 'red.500'
      })
      
    }
   }
  getExercisesByGroup();
 }, [groupSelected]))

  function handleOpenExerciseDetails(id:number) {
    navigation.navigate("exercise", {
      id
    })
  }


  console.log(listExercises)
  return (
    <VStack flex={1} bg="gray.700">
      <HomeHeader />
      <FlatList
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        minH={10}
        data={groups}
        renderItem={({ item }) => (
          <Group isActive={groupSelected === item} name={item} onPress={() => setGroupSelected(item)} />
        )}

      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">Exercícios</Heading>

          <Text color="gray.200" fontSize="sm">4</Text>
        </HStack>

        {
          listExercises.length <= 0 ? <Loading /> : (
            <FlatList
              keyExtractor={(item) => item.id.toString()}
              data={listExercises}
              showsVerticalScrollIndicator={false}
              _contentContainerStyle={{paddingBottom: 20}}
             renderItem={(props) => <ExerciseCard repetition={props.item.repetitions} serie={props.item.series} title={props.item.name} image={props.item.thumb} onPress={() => handleOpenExerciseDetails(props.item.id)} /> }
               />
          )
        }
      </VStack>
    </VStack>
  )
}