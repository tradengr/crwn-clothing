import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Navbar from './routes/navbar/Navbar.component'
import Home from './routes/home/Home.component'
import Auth from './routes/auth/Auth.component'
import Shop from './routes/shop/Shop.component'
import Checkout from './routes/checkout/Checkout.component'

import { httpGetUser } from './api/serverAPI'
import { setCurrentUser } from './redux/user/user.slice'

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    httpGetUser().then(res => dispatch(setCurrentUser(res.data)));
  }, [])

  return(
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/shop/*' element={<Shop/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  )
}

export default App
