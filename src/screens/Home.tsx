import { useNavigation } from "@react-navigation/native";
import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { Center, FlatList, HStack, Heading, Text, VStack } from "native-base";
import { useState } from "react";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Home() {
  const [groups, setGroups] = useState(["Costas", "Biceps", "Triceps", "ombro", "perna"])
  const [groupSelected, setGroupSelected] = useState("Costas")

  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleOpenExerciseDetails() {
    navigation.navigate("exercise")
  }
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

        <FlatList
          keyExtractor={(item,index) => index.toString()}
          data={groups}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{paddingBottom: 20}}
          renderItem={() => <ExerciseCard title="Puxada" onPress={handleOpenExerciseDetails} /> }
        />
      </VStack>
    </VStack>
  )
}