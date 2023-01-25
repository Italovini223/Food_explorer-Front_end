import { Container, ExitButton, Content } from "./styles";

import {BiSearch, TfiReceipt, RxExit} from 'react-icons/all'

import logoImg from '../../assets/Frame 5946.svg';

import { Input } from "../Input";
import { Button } from "../Button/styled";

export function Header(){
  return (
    <Container>
     <Content>
      <img src={logoImg} alt="Logo escrito food explorer" />
        <a href="#">Meus favoritos</a>
        <Input 
          icon={BiSearch}
          placeholder="Busque pelas opções de pratos"
        />
        <Button 
          icon={TfiReceipt}
          text="Meus pedidos(0)"
        />

        <ExitButton>
          <RxExit />
        </ExitButton>
     </Content>
    </Container>
  )
}

