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