import { Container, DishDetails } from "./styles";

import { api } from "../../service/api";

import {useCart} from '../../hooks/cart'


export function OrderDetails({data}){
  const {removeDishRFromCart} = useCart();

  const total = (data.price /100) * data.quantity;
  return (
    <Container>
      <img src={`${api.defaults.baseURL}/files/${data.avatar}`} alt="" />
      <div className="details">
        <DishDetails>
          <p>{data.quantity} x {data.title}</p>
          <span>R${String(total).replace(".", ",")}</span>
        </DishDetails>
        <button onClick={() => removeDishRFromCart(data)}>
          Excluir
        </button>
      </div>
    </Container>
  )
}