import { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";

import {api} from '../service/api';

const AuthContext = createContext({});

function AuthProvider({children}){
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  async function singIn({email, password}){
    try {
      setIsLoading(true);

      const response = await api.post("/singIn", {
        email,
        password
      });

      const {user, token} = response.data;

      localStorage.setItem("@FoodExplorer: user", JSON.stringify(user));
      localStorage.setItem("@FoodExplorer: token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({user, token});

      setIsLoading(false);

    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possível fazer Login")
      }
      
      setIsLoading(false);
    }
  }

  async function singUp({name, email, password}){
    setIsLoading(true);
    try {
      if(!name || !email || !password){
        setIsLoading(false);
        return alert("Preencha todos os campos")
      }

      if(password.length < 6) {
        setIsLoading(false);
        return alert("A senha deve conter no mínimo 6 caráteres")
      }
  
      const response = await api.post("/user", {
        name,
        email,
        password,
        isAdmin: false
      });
      setIsLoading(false);
      return alert(response.data.message);

    } catch(error) {
      if(error.response){
        setIsLoading(false);
        return alert(error.response.data.message);
      }

      setIsLoading(false);
      return alert("Não foi possível registrar-se!")
    }

  }

  function singOut(){
    localStorage.removeItem("@FoodExplorer: user");
    localStorage.removeItem("@FoodExplorer: token");

    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@FoodExplorer: user");
    const token = localStorage.getItem("@FoodExplorer: token");

    if(user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])
  return (
    <AuthContext.Provider value={{
      singIn,
      singOut,
      singUp,
      user: data.user,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export {AuthProvider, useAuth}