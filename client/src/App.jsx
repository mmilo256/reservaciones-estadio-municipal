import { Route, Routes } from 'react-router-dom'
import Calendar from './components/calendar/Calendar'
import dayjs from 'dayjs'
import Login from './components/Login'

const App = () => {

  const events = [
    {
      title: "titulo",
      startDate: dayjs("2025-01-30T09:00:00"),
      endDate: dayjs("2025-01-30T11:00:00")
    }
  ]

  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route index element={<Calendar events={events} />} />
      </Routes>
    </div>
  )
}

export default App