import { Input as InputNativeBase,IInputProps } from "native-base"



export function Input({...rest}:IInputProps) {
  return (
    <InputNativeBase
      w="100%"
      bg="gray.700"
      h={14}
      px={4}
      borderWidth={0}
      fontSize="md"
      color='white'
      placeholderTextColor="gray.300"
      fontFamily="body"
       mb={4}
      _focus={{
        borderColor:"green.500",
        borderWidth: 1
      }}
      {...rest}

    />
  )
}