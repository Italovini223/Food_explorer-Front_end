import { createContext, useContext,  useState, useEffect} from "react";

import { api } from "../service/api";


const orderContext = createContext({})

function OrderProvider({children}){

  async function createNewOrder({status, payMethod, total, cart}){
    const response = await api.post('/order/create', {
      status,
      payMethod,
      total,
      cart
    })

    return alert(response.data.message)
  }
  return (
    <orderContext.Provider value={{
      createNewOrder
    }}>
      {children}
    </orderContext.Provider>
  )
}

function useOrder(){
  const context = useContext(orderContext);
  return context;
}

export {OrderProvider, useOrder}