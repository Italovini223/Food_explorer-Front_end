import {Route, Routes} from 'react-router-dom';

import {Home} from '../pages/Home';
import {New} from '../pages/New';
import { Update } from '../pages/Update';


export function AppRoutes(){
  return (
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/new' element={<New />}/>
    <Route path='/update' element={<Update />} />
  </Routes>
  )
}