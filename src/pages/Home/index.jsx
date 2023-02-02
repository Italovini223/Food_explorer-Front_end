import { useState, useEffect } from "react";
import { api } from "../../service/api";

import { Banner, Container, Content } from "./styles";

import { Header } from '../../components/Header';

import BannerImg from '../../assets/banner.png';
import { Dish } from "../../components/Dish";
import { DishCategory } from "../../components/DishCategory";
import { Footer } from "../../components/Footer";

export function Home(){
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function fetchDishes(){
      const response = await api.get("/dish");
  
      setDishes([...response.data]);
    }

    fetchDishes();
  }, [])
  return(
    <Container>
      <Header />
      <Content>
        <Banner>
          <img src={BannerImg} alt="Imagem ilustrativa de frutas" />

          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Banner>
        {
          dishes.filter(dish => dish.category === "pratos principais").length > 0 &&
          <DishCategory
            title="pratos principais"
          >
            {
              dishes.filter(dish => dish.category === "pratos principais").map(dish => (
                <Dish 
                  data={dish}
                  key={toString(dish.id)}
                />
              ))
            }
          </DishCategory>
        }

        {
          dishes.filter(dish => dish.category === "sobremesas").length > 0 &&
          <DishCategory
            title="Sobremesas"
          >
            {
              dishes.filter(dish => dish.category === "sobremesas").map(dish => (
                <Dish 
                  data={dish}
                  key={toString(dish.id)}
                />
              ))
            }
          </DishCategory>
        }

        {
          dishes.filter(dish => dish.category === "bebidas").length > 0 &&
          <DishCategory
            title="Bebidas"
          >
            {
              dishes.filter(dish => dish.category === "bebidas").map(dish => (
                <Dish 
                  data={dish}
                  key={toString(dish.id)}
                />
              ))
            }
          </DishCategory>
        }
      </Content>
      <Footer />
    </Container>
    
  )
}
