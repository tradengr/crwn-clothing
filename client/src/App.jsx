import { useEffect, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Spinner from './components/spinner/spinner.component'

import { getCurrentUser } from './redux/user/user.slice'

const Navbar = lazy(() => import('./routes/navbar/Navbar.component'));
const Home = lazy(() => import('./routes/home/Home.component'));
const Auth = lazy(() => import('./routes/auth/Auth.component'));
const Shop = lazy(() => import('./routes/shop/Shop.component'));
const Checkout = lazy(() => import('./routes/checkout/Checkout.component'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [])

  return(
    <Suspense fallback={<Spinner/>}>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/shop/*' element={<Shop/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
