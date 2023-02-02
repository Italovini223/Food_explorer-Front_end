import {useAuth} from '../../hooks/auth';
import {useCart} from '../../hooks/cart';

import { Container, ExitButton, Content, Logo } from "./styles";

import {BiSearch, TfiReceipt, RxExit} from 'react-icons/all'

import { useNavigate } from 'react-router-dom';

import logoImg from '../../assets/Frame 5946.svg';

import { Input } from "../Input";
import { Button } from "../Button";

export function Header(){

  const {singOut, user} = useAuth();
  const {cart} = useCart();

  const navigate = useNavigate();

  function handleSingOut(){
    singOut();
  }


  return (
    <Container>
     <Content>
      <Logo href='/'>
        <img src={logoImg} alt="Logo escrito food explorer" />
      </Logo>
        {user.isAdmin !== 1 ? <a href="#">Meus favoritos</a> : <a href="/new">Adicionar pratos</a>}
        <Input 
          icon={BiSearch}
          placeholder="Busque pelas opções de pratos"
        />
        <Button 
          icon={TfiReceipt}
          text={`Meus pedidos(${cart.length})`}
          onClick={() => navigate("/order")}
        />

        <ExitButton onClick={handleSingOut}>
          <RxExit />
        </ExitButton>
     </Content>
    </Container>
  )
}

