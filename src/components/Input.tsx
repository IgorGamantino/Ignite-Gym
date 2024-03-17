import { Input as InputNativeBase,IInputProps } from "native-base"

interface InputProps  extends IInputProps {}

export function Input(props:InputProps) {
  return (
    <InputNativeBase
      w="100%"
      bg="gray.700"
      h={14}
      px={4}
      borderWidth={0}
      fontSize="md"
      color='white'
      fontFamily="body"
       mb={4}
      {...props}

    />
  )
}