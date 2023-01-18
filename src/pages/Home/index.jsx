import { Banner, Container, Content } from "./styles";

import { Header } from '../../components/Header';

import BannerImg from '../../assets/banner.png';
import { Dish } from "../../components/Dish";

export function Home(){
  return(
    <Container>
      <Header />
      <Content>
        <Banner>
          <img src={BannerImg} alt="Imagem ilustrativa de frutas" />

          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Banner>
        <Dish />
      </Content>
    </Container>
  )
}
