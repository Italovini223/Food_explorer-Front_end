import { useEffect, useState } from "react";

import { Container, Content, Info,ButtonBack,Ingredients,Main,  } from "./styles";

import { useParams } from "react-router-dom";

import {useCart} from '../../hooks/cart';

import { api } from "../../service/api";

import { Button } from "../../components/Button";
import {Footer} from '../../components/Footer';
import {Ingredient} from '../../components/Ingredient'

import {SlArrowLeft, FiPlus, FiMinus, TfiReceipt} from 'react-icons/all';

export function Details(){
  const [dish, setDish] =  useState({});
  const [quantity, setQuantity] = useState(1);
  const [ingredients, setIngredient] = useState([]);

  const params = useParams();
  const {addDishRToCart} = useCart();

  const data ={
    title: dish.name,
    avatar: dish.avatar,
    price: dish.price,
    id: dish.id,
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


  useEffect(() => {
    async function getDish(){
      const response = await api.get(`/dish/show/${params.id}`)
      setDish({...response.data});
      setIngredient([...response.data.ingredients])
    }

    getDish();
  }, [])

  return (
    <Container>
    <Content>
      <ButtonBack>
        <a href="/"> <SlArrowLeft size={30}/>Voltar</a>
      </ButtonBack>
      {
        dish &&
        <Main>
          <div className="dishContent">
            <img src={`${api.defaults.baseURL}/files/${dish.avatar}`} alt={`imagem de ${dish.name}`} />
          </div>
          <div>
            <h1>{dish.name}</h1>
            <p>{dish.description}</p>
            <Ingredients>
              {
                ingredients.map(ingredient => (
                  <Ingredient key={String(ingredient.id)} name={ingredient.name} />
                ))
              }
            </Ingredients>
            <Info>
              <strong>R$ {String(dish.price/100).replace(".", ",")}</strong>
              <button
                onClick={handleLessQuantity} 
                className="btn"><FiMinus size={25}/>
              </button>
          
              <span>{quantity}</span>
          
              <button
                onClick={handleMoreQuantity}
                className="btn"><FiPlus size={25}/>
              </button>
              <Button 
                text="incluir"
                icon={TfiReceipt}
                onClick={() => addDishRToCart(data)}
              />
            </Info>
          </div>
        </Main>
      }
    </Content>
    <Footer />
  </Container>
  )
}