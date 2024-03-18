import { HomeHeader } from "@components/HomeHeader";
import { Center ,Text, VStack} from "native-base";

export function Home () {
  return (
    <VStack flex={1} bg="gray.700">
      <HomeHeader />
      <Text>Home</Text>
    </VStack>
  )
}