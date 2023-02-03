import {Route, Routes} from 'react-router-dom';

import { SingIn } from '../pages/SingIn';
import { SingUp } from '../pages/signUp';

export function UserRoutes(){
  return (
  <Routes>
    <Route path='/' element={<SingIn />} />
    <Route path='/register' element={<SingUp />} />
  </Routes>
  )
}