import { useState } from "react";

import { Container, Content, SingOutForm } from "./styles";

import {Label} from '../../components/Label';
import {Button} from '../../components/Button';

import LogoImg from '../../assets/Group 5946 big.svg'
import { api } from "../../service/api";


export function SingOut(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSingOut() {
      setIsLoading(true);

      if(!name || !email || !password){
        setIsLoading(false);
        return alert("Preencha todos os campos");
        
      }

      if(password.length < 6){
        setIsLoading(false);
        return alert("A senha deve conter no mínimo 6 caracteres");
      }
    
      setIsLoading(false);
  }  

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
              text={isLoading ? "Carregando" : "Entrar"}
              IsLoading={isLoading}
              onClick={handleSingOut}
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