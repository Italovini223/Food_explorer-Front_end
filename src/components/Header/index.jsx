import {useAuth} from '../../hooks/auth';
import {useCart} from '../../hooks/cart';

import { Container, ExitButton, Content, Logo } from "./styles";

import {BiSearch, TfiReceipt, RxExit} from 'react-icons/all'

import { useNavigate } from 'react-router-dom';

import logoImg from '../../assets/Frame 5946.svg';

import { Input } from "../Input";
import { Button } from "../Button";

export function Header({change,...rest}){

  const {singOut, user} = useAuth();
  const {cart} = useCart();

  const isAdmin = user.isAdmin === 1;

  const navigate = useNavigate();

  function handleSingOut(){
    singOut();
    navigate("/");
  }


  return (
    <Container>
     <Content>
      <Logo href='/'>
        <img src={logoImg} alt="Logo escrito food explorer" />
      </Logo>
        {user.isAdmin !== 1 ? <button className='favorites' {...rest}>Meus favoritos</button> : <a href="/new">Adicionar pratos</a>}
        <Input 
          icon={BiSearch}
          placeholder="Busque pelas opções de pratos"
          onChange={change}
        />
        <Button 
          icon={TfiReceipt}
          text={isAdmin ? "Pedidos" : `Meus pedidos(${cart.length})`}
          onClick={() => isAdmin ? navigate("/orders") :  navigate("/cart")}
        />

        <ExitButton onClick={handleSingOut}>
          <RxExit />
        </ExitButton>
     </Content>
    </Container>
  )
}

