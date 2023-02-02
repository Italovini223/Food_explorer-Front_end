import {createContext, useContext, useState, useEffect} from 'react';

const CartContext = createContext({});

function CartProvider({children}){
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("@foodExplorer:cart")) || []);

  function addDishRToCart(data){
    setCart([...cart, data]);
  } 

  function removeDishRFromCart(data){
    const filteredCart = cart.filter((dish) => dish.id !== data.id);

    setCart([...filteredCart])
  }

  useEffect(() => {
    localStorage.setItem("@foodExplorer:cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{
      addDishRToCart,
      removeDishRFromCart,
      cart
    }}>
      {children}
    </CartContext.Provider>
  )
}

function useCart(){
  const context = useContext(CartContext);
  return context;
}

export {CartProvider, useCart}