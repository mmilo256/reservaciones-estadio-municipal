import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import CreateReservation from './pages/reservaciones/CreateReservation'
import Reservations from './pages/reservaciones/Reservations'
import ReservationDetails from './pages/reservaciones/ReservationDetails'

const App = () => {

  return (
    <div className='h-dvh'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route index element={<Layout title="Calendario semanal"><Home /></Layout>} />
        <Route path='/reservaciones' element={<Layout title="Historial de reservaciones"> <Reservations /> </Layout>} />
        <Route path='/reservaciones/:id' element={<Layout title="Detalle de la reservación"> <ReservationDetails /> </Layout>} />
        <Route path='/reservaciones/crear' element={<Layout title="Crear reservación"><CreateReservation /></Layout>} />
      </Routes>
    </div>
  )
}

export default App