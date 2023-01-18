import { Container } from "./styles";

export function Button({icon: Icon, text ,...rest}){
  return (
    <Container
      {...rest}
    >
      {Icon && <Icon />}
      <span>{text}</span>
    </Container>
  )
}