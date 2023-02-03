import {Route, Routes} from 'react-router-dom';

import {Home} from '../pages/Home';
import {New} from '../pages/New';
import { Update } from '../pages/Update';
import {Cart} from '../pages/Cart'
import { Details } from '../pages/Details';
import {Orders} from '../pages/Order'


export function AppRoutes(){
  return (
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/new' element={<New />}/>
    <Route path='/update/:id' element={<Update />} />
    <Route path='/cart' element={<Cart />}/>
    <Route path='/details/:id' element={<Details />} />
    <Route path='/orders' element={<Orders/>} />

  </Routes>
  )
}