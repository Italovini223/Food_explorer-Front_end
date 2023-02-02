import {Route, Routes} from 'react-router-dom';

import {Home} from '../pages/Home';
import {New} from '../pages/New';
import { Update } from '../pages/Update';
import {Order} from '../pages/Order'
import { Details } from '../pages/Details';


export function AppRoutes(){
  return (
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/new' element={<New />}/>
    <Route path='/update/:id' element={<Update />} />
    <Route path='/order' element={<Order />}/>
    <Route path='/details/:id' element={<Details />} />

  </Routes>
  )
}