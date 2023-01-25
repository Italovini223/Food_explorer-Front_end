import { Container } from "./styles";

export function Button({icon: Icon, text, IsLoading = false ,...rest}){
  return (
    <Container
      {...rest}
      disabled={IsLoading}
      redDisabled={IsLoading}
    >
      {Icon && <Icon />}
      <span>{text}</span>
    </Container>
  )
}