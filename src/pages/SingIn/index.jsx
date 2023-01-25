import { useState } from "react";

import { Container, Content, SingInForm } from "./styles";

import {Label} from '../../components/Label';
import {Button} from '../../components/Button/styled';

import LogoImg from '../../assets/Group 5946 big.svg'


export function SingIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSingIn() {
      setIsLoading(true);

      if(password.length < 6) {
        return alert("A senha deve conter seis dígitos");
      }
  
      if(!email || !password) {
        return alert("Preencha todos os campos");
      }

      console.log(email, password);
    
      setIsLoading(false)
  }  

  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="" />
        <SingInForm>
          <div>
            <h2>Crie sua conta</h2>
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
            <a href="#">
              Criar uma conta
            </a>
          </div>
        </SingInForm>
      </Content>
    </Container>
  )
}