import { Container } from "./styles";
import LogoImg from '../../assets/logo_gray.svg';

export function Footer(){
  return (
    <Container>
      <img src={LogoImg} alt="Imagem escrita food explorer" />
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}