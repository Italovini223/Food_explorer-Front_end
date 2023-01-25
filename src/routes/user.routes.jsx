import {Route, Routes} from 'react-router-dom';

import { SingIn } from '../pages/SingIn';
import { SingOut } from '../pages/SingOut';

export function UserRoutes(){
  return (
  <Routes>
    <Route path='/' element={<SingIn />} />
    <Route path='/register' element={<SingOut />} />
  </Routes>
  )
}