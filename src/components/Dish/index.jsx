import {useState} from 'react';

import { Container, DishDetails, FavoriteButton } from "./styles";

import {AiOutlineHeart, AiFillHeart, IoMdAdd, AiOutlineMinus} from 'react-icons/all'
import React from "react";
import { Button } from '../Button/styled';

export function Dish({data}){

  const[quantity, setQuantity] = useState(1);

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
        <img src="https://i.imgur.com/T7YZgUI.png" alt="Imagem do prato" />
        <h2>Torradas de Parma</h2>
        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
        <strong>R$ 25,97</strong>
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