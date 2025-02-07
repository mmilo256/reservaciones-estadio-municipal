import { create } from 'zustand'
import { fetchAuthData, login, logout } from '../services/authServices';

const useAuthStore = create((set) => ({
    isAuthenticated: false,
    sessionData: {},
    sessionExpired: false,
    setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
    loginUser: async (data) => {
        const userData = await login(data)
        set({ isAuthenticated: true, sessionData: userData.user })
    },
    logoutUser: async () => {
        try {
            await logout()
        } catch (error) {
            console.log(error)
        } finally {
            set({ isAuthenticated: false, sessionData: {}, sessionExpired: false })
        }
    },
    checkAuth: async () => {
        try {
            const data = await fetchAuthData()
            set({ isAuthenticated: data.isAuthenticated, sessionData: data.user })
        } catch (error) {
            console.log({ msg: "no funca", error: error.message })
        }
        /* const sessionData = localStorage.getItem('session')
         */
    },
    setSessionExpired: (bool) => set({ sessionExpired: bool })
}));

export default useAuthStore