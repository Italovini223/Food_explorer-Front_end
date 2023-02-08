import { useState } from 'react';

import {useAuth} from '../../hooks/auth';
import {useCart} from '../../hooks/cart';

import { Container, ExitButton, Content, Logo, Nav } from "./styles";

import {BiSearch, TfiReceipt, RxExit, FaBars, FiX  } from 'react-icons/all'

import { useNavigate } from 'react-router-dom';

import logoImg from '../../assets/Frame 5946.svg';

import { Input } from "../Input";
import { Button } from "../Button";


export function Header({change, click}){
  const [menuVisible, setMenuVisible] = useState(true);


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

        <Nav isVisible={menuVisible}>

          {
            user.isAdmin !== 1 ? 
            <div className='user-options'>
              <button className='favorites' onClick={click}>Meus favoritos</button> 
              <button onClick={() => navigate('/orders')}>Minhas compras</button>
            </div>
            : 
            <a href="/new">Adicionar pratos</a>
          }
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

        </Nav>
        <button className='menu' onClick={() => setMenuVisible(!menuVisible)}>
          {menuVisible ? <FiX /> : <FaBars />}
        </button>
     </Content>
    </Container>
  )
}

