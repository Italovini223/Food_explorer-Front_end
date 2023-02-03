import { useState } from "react";

import {useAuth} from '../../hooks/auth';

import { Container, Content, SingOutForm } from "./styles";

import {Label} from '../../components/Label';
import {Button} from '../../components/Button';

import LogoImg from '../../assets/Group 5946 big.svg'



export function SingUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const{singUp, isLoading} = useAuth();

  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="" />
        <SingOutForm>
          <div>
            <h2>Crie sua conta</h2>
            <Label 
              title="Seu nome"
              type="text"
              placeholder="Exemplo: Maria da Silva"
              onChange={e => setName(e.target.value)}

            />
            <Label 
              title="Email"
              type="text"	
              placeholder="Exemplo: exemplo@exemplo.com.br"
              onChange={e => setEmail(e.target.value)}
            />
            <Label 
              title="Senha"
              type="password"
              placeholder="No mínimo 6 caracteres"
              onChange={e => setPassword(e.target.value)}
            />
            <Button 
              text={isLoading ? "Carregando" : "Registrar"}
              IsLoading={isLoading}
              onClick={() => singUp({name, email, password})}
              disabled={isLoading}
            />
            <a href="/">
              Ja tenho uma conta
            </a>
          </div>
        </SingOutForm>
      </Content>
    </Container>
  )
}