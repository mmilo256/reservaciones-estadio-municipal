import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import CreateReservation from './pages/CreateReservation'

const App = () => {

  return (
    <div className='h-dvh'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route index element={<Layout title="Calendario semanal"><Home /></Layout>} />
        <Route path='/crear-reservacion' element={<Layout title="Crear reservación"><CreateReservation /></Layout>} />
      </Routes>
    </div>
  )
}

export default App