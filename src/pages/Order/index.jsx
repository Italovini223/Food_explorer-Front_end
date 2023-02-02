import { Container, Content, DishesContent, Payment } from "./styles";

import {useCart} from '../../hooks/cart'

import {Header} from '../../components/Header'
import { OrderDetails } from "../../components/OrderDetails";

export function Order(){
  const {cart} = useCart();

  const total = cart.reduce((value, dish) => {
    return value + (dish.price * dish.quantity)
  },0) 


  return (
    <Container>
      <Header />
      <Content>
        <DishesContent>
          <h1>Meu pedido</h1>

          {
            cart &&
            <div className="dishes">
              {
                cart.map(dish => (
                  <OrderDetails 
                    data={dish}
                    key={String(dish.id)}
                  />
                ))
              }
            </div>
          }
          <span>Total: R$ {String(total/100).replace(".", ",")}</span>
        </DishesContent>

        <Payment>
          <h1>Pagamento</h1>
        </Payment>
      </Content>
    </Container>
  )
}