import { Routes, Route } from 'react-router-dom'

import Navbar from './routes/navbar/Navbar.component'
import Home from './routes/home/Home.component'
import Auth from './routes/auth/Auth.component'

function App() {
  return(
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home/>} />
        <Route path='/auth' element={<Auth/>} />
      </Route>
    </Routes>
  )
}

export default App
