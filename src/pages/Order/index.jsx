import { useState } from "react";

import { Container, Content, DishesContent, Payment, SectionCredit, Accept} from "./styles";

import {useCart} from '../../hooks/cart'
import {useOrder} from '../../hooks/order';

import {Header} from '../../components/Header'
import { OrderDetails } from "../../components/OrderDetails";
import {Label} from '../../components/Label'
import {Button} from '../../components/Button'
import {Footer} from '../../components/Footer'


import {BsCreditCard2Back, TfiReceipt} from 'react-icons/all'
 
import qrCode from '../../assets/elements.png';
import pixImg from '../../assets/pix.png';
import successImg from '../../assets/Vector (Stroke) (2).png';

export function Order(){
  const [loading, setLoading] = useState(false);
  const [isPix, setIsPix] = useState(true);
  const [paymentAccept, setPaymentAccept] = useState(false);

  const {cart, } = useCart();
  const {createNewOrder} = useOrder();

  const total = cart.reduce((value, dish) => {
    return value + (dish.price * dish.quantity)
  },0);

  function handleOrder() {
    setLoading(true);

    createNewOrder({
      status: "Pagamento efetuado com sucesso",
      payMethod: isPix ? "Pix" : "cartão de credito",
      total,
      cart

    })

    setLoading(false);
    setPaymentAccept(true);
  }

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

          <div>
            <div>
              <button
                className='button-pix'
                type='button'
                onClick={() => setIsPix(true)}
              >
                <img src={pixImg} alt="ícone do pix" />
                Pix
              </button>
              <button
                className='button-credit'
                type='button'
                onClick={() => setIsPix(false)}
              >
                <BsCreditCard2Back />
                Cartão de crédito
              </button>
            </div>
            <div className='option-payment'>
              {
                paymentAccept ? 
                  <div className="approved">
                    <img src={successImg} alt="" />
                    <span>Pagamento aprovado!</span>
                  </div>
                  :
                isPix ? 
                  <img src={qrCode} alt="qr code" />
                  :
                    <SectionCredit>
                      <Label 
                        type="number"
                        title="Número do Cartão"
                        label="card-number"
                        placeholder="0000 0000 0000 0000"
                      />
                      <div className='data-card'>
                        <Label 
                          type="data"
                          title="Validade"
                          label="validated"
                          placeholder="04/25"
                        />
                        <Label 
                          type="number"
                          title="CVC"
                          label="cvc"
                          placeholder="000"
                        />
                      </div>
                    </SectionCredit>
                }

                {
                  paymentAccept ? null :
                  <Button
                    text={loading ? "Pagamento finalizado!" : "Finalizar pagamento"}
                    onClick={handleOrder}
                    disabled={loading}
                    icon={TfiReceipt}
                  /> 
                }
 
            </div>
          </div>

        </Payment>
      </Content>
      <Footer />
    </Container>
  )
}