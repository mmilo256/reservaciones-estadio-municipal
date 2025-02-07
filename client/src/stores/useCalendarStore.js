import { create } from 'zustand'

const useCalendarStore = create((set) => ({
    eventModal: false,
    selectedEvent: {},
    setEventModal: (bool) => set({ eventModal: bool }),
    setSelectedEvent: (event) => set({ selectedEvent: event })
}));

export default useCalendarStore