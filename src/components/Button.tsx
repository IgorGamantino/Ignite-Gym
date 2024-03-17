import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base"

interface ButtonProps extends IButtonProps {
  title: string
}

export function Button({ title, variant, ...rest }: ButtonProps) {
  return (
    <ButtonNativeBase {...rest}
      w="100%"
      h={14}
      bg={variant === "outline" ? "transparent" : "green.700"}
      rounded='sm'
      _pressed={{
        bg: variant === "outline" ? "gray.500" : "green.500"
      }}
      borderColor={variant === "outline" ? "green.500" : "transparent"}
      borderWidth={variant === "outline" ? 1 : 0}
    >
      <Text
        color={variant === "outline" ? "green.500" : "white"}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  )
}