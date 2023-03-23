import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import { useAuth } from '../../hooks/auth';


import { Container, Content, Table, Thead, Tbody, SelectWrapper } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Orders() {
  const [orders, setOrders] = useState([]);

  const { user } = useAuth()

  const isAdmin = user.isAdmin === 1;


  async function handleOrderStatus(order, event) {
    let status = event.target.value


    await api.patch("/order/updateStatus", {
      id: order.id,
      status
    });

    return alert("Status do pedido atualizado com sucesso");

  }

  function formatDate(date) {
    const dateFormatted = new Date(date)

    let monthFormatted = (dateFormatted.getMonth() + 1).toString()
    monthFormatted = (monthFormatted.length == 1) ? `0${monthFormatted}` : monthFormatted

    let minutesFormatted = dateFormatted.getMinutes().toString()
    minutesFormatted = (minutesFormatted.length == 1) ? `0${minutesFormatted}` : minutesFormatted

    return `${dateFormatted.getDate()}/${monthFormatted} às ${dateFormatted.getHours()-3}h${minutesFormatted}`
  }

  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get("/order/index");
      setOrders([...response.data]);
    }

    fetchOrders()
  }, [handleOrderStatus])

  return (
    <Container>
      <Header />
      {
        user &&
        <Content>
          <h3>Pedidos</h3>
          <main>
            <Table>
              <Thead>
                <tr>
                  <th>Status</th>
                  <th>Código</th>
                  <th>Detalhamento</th>
                  <th>Data e hora</th>
                </tr>
              </Thead>
              <Tbody>

                { orders &&
                  orders.map(order => (
                    <tr key={String(order.id)}>
                      <td>
                        {
                          isAdmin ?
                            <SelectWrapper>
                              <span id='orderStatus' className={order.status}></span>
                              <select name="select" id="select" onChange={event => handleOrderStatus(order, event)}>
                                <option defaultValue={order.status}>{order.status}</option>
                                <option value="pendente"> pendente </option>
                                <option value="preparando"> preparando</option>
                                <option value="entregue">entregue</option>
                              </select> 
                            </SelectWrapper>
                          :
                            <SelectWrapper>
                                <span id='orderStatus' className={order.status}></span>
                                <select name="select" id="select">
                                  <option defaultValue={order.status}>{order.status}</option>
                                </select>
                            </SelectWrapper>
                        }
                      </td>
                      <td>00000{order.id}</td>
                      <td>
                      {
                        order.dishes.map(item => (
                          <span key={item.title}> {item.quantity} x {item.title}, </span>
                        ))
                      }
                      </td>
                      <td>{formatDate(order.crated_at)}</td>
                    </tr>
                  ))
                }
              </Tbody>
            </Table>
          </main>
        </Content>
      }
  
      <Footer />
    </Container>
  )
} 