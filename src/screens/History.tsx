import { ScreenHeader } from "@components/ScreenHeader";
import { VStack, Text } from "native-base";
import React from "react";

export function History() {
  return (
    <VStack flex={1} bg="gray.700">
      <ScreenHeader title="Historico de exercicios"/>
    </VStack>
  )
}