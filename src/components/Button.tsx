import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base"

interface ButtonProps extends IButtonProps {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <ButtonNativeBase {...rest}
      w="100%"
      h={14}
      bg="green.700"
      rounded='sm'
      _pressed={{
         bg:"green.500"
      }}
    >
      <Text
        color="white"
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  )
}