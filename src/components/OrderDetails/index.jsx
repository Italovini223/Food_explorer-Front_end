import { Container, DishDetails } from "./styles";

import { api } from "../../service/api";


export function OrderDetails({data}){

  const total = (data.price /100) * data.quantity;
  return (
    <Container>
      <img src={`${api.defaults.baseURL}/files/${data.avatar}`} alt="" />
      <div className="details">
        <DishDetails>
          <p>{data.quantity} x {data.title}</p>
          <span>R${String(total).replace(".", ",")}</span>
        </DishDetails>
        <button>
          Excluir
        </button>
      </div>
    </Container>
  )
}