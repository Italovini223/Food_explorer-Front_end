import {createContext, useContext, useState, useEffect} from 'react';

export const FavoritesContext = createContext({});

function FavoritesProvider({children}){
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("@foodExplorer:favorites")) || []);

  function addFavorite(data){
    setFavorites([...favorites, data]);

    return alert("prato adicionado ao pedido");
  }

  async function removeFavorite(data){
    const filteredFavorites =  await favorites.filter((dish) => dish.id !== data.id);

    setFavorites([...filteredFavorites]);
  }

  useEffect(() => {
    localStorage.setItem("@foodExplorer:favorites", JSON.stringify(favorites));
  }, [favorites])

  return (
    <FavoritesContext.Provider value={{
      addFavorite,
      removeFavorite,
      favorites
    }}>
      {children}
    </FavoritesContext.Provider >
  )
}

function useFavorites(){
  const context = useContext(FavoritesContext);
  return context;
}


export {FavoritesProvider, useFavorites}