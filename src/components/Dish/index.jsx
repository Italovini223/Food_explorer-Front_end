import {useState} from 'react';
import { api } from '../../service/api';

import {useAuth} from '../../hooks/auth'

import { Container, DishDetails, FavoriteButton } from "./styles";

import {AiOutlineHeart, AiFillHeart, IoMdAdd, AiOutlineMinus} from 'react-icons/all'
import React from "react";
import { Button } from '../Button/styled';

export function Dish({data}){
  const[quantity, setQuantity] = useState(1);
  const imageURL = `${api.defaults.baseURL}/files/${data.avatar}`;

  const {user} = useAuth();

  const link = user.isAdmin !== 1 ? "#" : `/update/${data.id}`;

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
        <button>
          <AiOutlineHeart />
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

          <Button text="incluir" />
        </div>
      </DishDetails>
  </Container>
  )


}