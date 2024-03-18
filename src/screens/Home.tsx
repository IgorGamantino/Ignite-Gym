import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { Center ,FlatList,HStack,Text, VStack} from "native-base";
import { useState } from "react";

export function Home () {
  const [groups,setGroups] = useState(["Costas","Biceps", "Triceps", "ombro", "perna"])
  const [groupSelected,setGroupSelected] = useState("costa")
  return (
    <VStack flex={1} bg="gray.700">
      <HomeHeader />



        <FlatList 
          keyExtractor={item => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{px: 8}}
          my={10}
          maxH={10}
          data={groups}


          renderItem={({item})=> (
            <Group isActive={groupSelected === item} name={item} onPress={()=>setGroupSelected(item)} />
          )} 
        
        
        />


      <Text>Home</Text>
    </VStack>
  )
}