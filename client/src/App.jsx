import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import CreateReservation from './pages/reservaciones/CreateReservation'
import Reservations from './pages/reservaciones/Reservations'
import ReservationDetails from './pages/reservaciones/ReservationDetails'
import { useEffect, useState } from 'react'
import useAuthStore from './stores/useAuthStore'
import PrivateRoute from './components/PrivateRoute'

const App = () => {

  const { checkAuth } = useAuthStore()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      await checkAuth()
      setLoading(false)
    })()
  }, [checkAuth])

  if (loading) return null

  return (
    <div className='h-dvh'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route index element={<PrivateRoute><Layout title="Calendario semanal"><Home /></Layout></PrivateRoute>} />
        <Route path='/reservaciones' element={<PrivateRoute><Layout title="Historial de reservaciones"> <Reservations /> </Layout></PrivateRoute>} />
        <Route path='/reservaciones/:id' element={<PrivateRoute><Layout title="Detalle de la reservación"> <ReservationDetails /> </Layout></PrivateRoute>} />
        <Route path='/reservaciones/crear' element={<PrivateRoute><Layout title="Crear reservación"><CreateReservation /></Layout></PrivateRoute>} />
      </Routes>
    </div>
  )
}

export default App