import { Routes, Route } from 'react-router-dom'

import Navbar from './routes/navbar/Navbar.component'
import Home from './routes/home/Home.component'
import SignIn from './components/signIn/SignIn.component'

function App() {
  return(
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home/>} />
        <Route path='/signin' element={<SignIn/>} />
      </Route>
    </Routes>
  )
}

export default App
