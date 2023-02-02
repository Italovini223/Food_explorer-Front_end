import { useState } from "react";

import {useAuth} from '../../hooks/auth';

import { Container, Content, SingInForm } from "./styles";

import {Label} from '../../components/Label';
import {Button} from '../../components/Button';

import LogoImg from '../../assets/Group 5946 big.svg'


export function SingIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {singIn, isLoading} = useAuth();
  

  function handleSingIn() {
    if(password.length < 6) {
      return alert("A senha deve conter seis dígitos");
    }
  
    if(!email || !password) {
      return alert("Preencha todos os campos");
    }

    singIn({email, password});
    
  }  

  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="" />
        <SingInForm>
          <div>
            <h2>Faça login</h2>
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
              text={isLoading ? "Carregando" : "Entrar"}
              IsLoading={isLoading}
              onClick={handleSingIn}
            />
            <a href="/register">
              Criar uma conta
            </a>
          </div>
        </SingInForm>
      </Content>
    </Container>
  )
}