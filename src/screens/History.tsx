import { ScreenHeader } from "@components/ScreenHeader";
import { VStack, Text, HStack, Heading, SectionList } from "native-base";
import React from "react";


const DATA = [
  {
    title: '02.03.2024',
    data: ['Costa', 'Ombro'],
  },
  {
    title: '02.03.2024',
    data: ['Costa', 'Ombro'],
  },
  {
    title: '02.03.2024',
    data: ['Costa', 'Ombro'],
  },
];

export function History() {



const CardHistory = () => (
  <HStack w="full" px={5} py={4} mb={3} bg="gray.600" rounded="md" alignItems='center' justifyContent="space-between">
        <VStack mr={5}>
          <Heading color="white" fontSize='md' textTransform="capitalize">Costas</Heading>
          <Text color="gray.100" fontSize="lg" numberOfLines={1}>Puxada frontal</Text>
        </VStack>

        <Text color="gray.300" fontSize="md">08:56</Text>
      </HStack>
)

  return (
    <VStack flex={1} bg="gray.700">
      <ScreenHeader title="Historico de exercicios"/>


      <SectionList 
        px={6}
        sections={DATA}
        keyExtractor={item => item}
        renderItem={() => <CardHistory />}
        ListEmptyComponent={() => <Text color="gray.100" textAlign="center" mt={10}>Não ha exercícios registrados ainda.
          Vamos fazer exercícios hoje?
        </Text>}
        renderSectionHeader={(item) => (<Heading color="gray.200" fontSize="md" mb={4} mt={10}>{item.section.title}</Heading>)}
      />
    </VStack>
  )
}