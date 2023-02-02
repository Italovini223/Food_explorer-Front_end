import {useState} from 'react';
import { api } from '../../service/api';

import {useAuth} from '../../hooks/auth'
import {useFavorites} from '../../hooks/favorites';
import {useCart} from '../../hooks/cart';

import { Container, DishDetails, FavoriteButton } from "./styles";

import {AiOutlineHeart, AiFillHeart, IoMdAdd, AiOutlineMinus} from 'react-icons/all'
import React from "react";
import { Button } from '../Button/styled';

export function Dish({data}){
  const[quantity, setQuantity] = useState(1);
  const imageURL = `${api.defaults.baseURL}/files/${data.avatar}`;

  const {user} = useAuth();
  const {favorites, removeFavorite, addFavorite } = useFavorites();
  const {addDishRToCart} = useCart();

  let isFavorite = favorites.some((dish) => dish.id === data.id);

  const link = user.isAdmin !== 1 ? "#" : `/update/${data.id}`;

  const dish ={
    title: data.name,
    avatar: data.avatar,
    price: data.price,
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

  return(
    <Container>
      <FavoriteButton>
        <button
          onClick={() => isFavorite ? removeFavorite(data) : addFavorite(data)}
        >
          {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      </FavoriteButton>

      <DishDetails>
        <img src={imageURL} alt="Imagem do prato" />
        <a href={link}>{data.name}</a>
        <p>{data.description}</p>
        <strong>{String(data.price /100).replace(".", ",")}</strong>
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
      </DishDetails>
  </Container>
  )


}