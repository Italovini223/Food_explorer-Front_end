import {useState} from 'react';

import { api } from '../../service/api';

import { useNavigate } from 'react-router-dom';

import {useAuth} from '../../hooks/auth'
import {useFavorites} from '../../hooks/favorites';
import {useCart} from '../../hooks/cart';

import { Container, DishDetails, FavoriteButton } from "./styles";

import {AiOutlineHeart, AiFillHeart, IoMdAdd, AiOutlineMinus, FiTrash} from 'react-icons/all'
import React from "react";
import { Button } from '../Button';

export function Dish({data}){
  const[quantity, setQuantity] = useState(1);
  const imageURL = `${api.defaults.baseURL}/files/${data.avatar}`;

  const navigate = useNavigate();

  const {user} = useAuth();
  const {favorites, removeFavorite, addFavorite } = useFavorites();
  const {addDishRToCart} = useCart();

  let isFavorite = favorites.some((dish) => dish.id === data.id);

  const link = user.isAdmin !== 1 ? `/details/${data.id}` : `/update/${data.id}`;

  const isAdmin = user.isAdmin === 1;

  const dish ={
    title: data.name,
    avatar: data.avatar,
    price: data.price,
    id: data.id,
    quantity
  }

  function handleMoreQuantity(){
    const addQuantity = quantity + 1;

    setQuantity(addQuantity);
  }

  function handleLessQuantity(){

    if(quantity <=1){
      setQuantity(1);
      return
    }
    const lessQuantity = quantity - 1;

    setQuantity(lessQuantity);
  }

  async function deleteDish(){
    const response = await api.delete(`/dish/delete/${data.id}`); 

    alert(response.data.message); 
     navigate("/"); 


  }

  return(
    <Container>
      <FavoriteButton>
       {
        isAdmin ? 
          <button
            onClick={deleteDish}
          >
            <FiTrash />
          </button>
        :
          <button
          onClick={() => isFavorite ? removeFavorite(data) : addFavorite(data)}
          >
            {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
       }
      </FavoriteButton>

      <DishDetails>
        <img src={imageURL} alt="Imagem do prato" />
        <a type='button' onClick={() => user.isAdmin === 1 ? navigate(`/update/${data.id}`) : navigate( `/details/${data.id}`)}>{data.name}</a>
        <p>{data.description}</p>
        <strong>R$ {String(data.price /100).replace(".", ",")}</strong>
        {
          !isAdmin  && 

          <div>
            <div className="quantity">
              <button onClick={handleMoreQuantity}>
                <IoMdAdd />
              </button>
              <span>
                {quantity}
              </span>
              <button onClick={handleLessQuantity}>
              <AiOutlineMinus />
              </button>
            </div>

            <Button text="incluir" onClick={() => addDishRToCart(dish)} />
          </div>
        }
        
      </DishDetails>
  </Container>
  )


}