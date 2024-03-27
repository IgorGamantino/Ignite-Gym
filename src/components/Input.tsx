import { Input as InputNativeBase,IInputProps ,Text} from "native-base"
import { Control, Controller } from "react-hook-form"


interface InputProps extends IInputProps {
  name: string;
  control?: Control<any>;
  error?: string;
}

export function Input({name,error,control,...rest}:InputProps) {
  return (
   <Controller
   control={control}
   name={name}
    render={({field}) => (
      <>
      <InputNativeBase
      w="100%"
      bg="gray.700"
      h={14}
      px={4}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      borderWidth={0}
      fontSize="md"
      color='white'
      placeholderTextColor="gray.300"
      fontFamily="body"
      _focus={{
        borderColor:"green.500",
        borderWidth: 1
      }}
      {...rest}
      
    />
     {!!error &&  <Text color="red.500" w="100%" pl={2} >{error}</Text>}
   </>
    )}
   />
  )
}