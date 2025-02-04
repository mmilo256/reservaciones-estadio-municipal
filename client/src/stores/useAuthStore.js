import { create } from 'zustand'
import { fetchAuthData, login } from '../services/authServices';

const useAuthStore = create((set) => ({
    isAuthenticated: false,
    sessionData: {},
    sessionExpired: false,
    setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
    loginUser: async (data) => {
        const userData = await login(data)
        console.log(userData.user)
        set({ isAuthenticated: true, sessionData: userData.user })
    },
    logoutUser: () => {
        localStorage.removeItem('session')
        set({ isAuthenticated: false, sessionData: {}, sessionExpired: false })
    },
    checkAuth: async () => {
        try {
            const data = await fetchAuthData()
            set({ isAuthenticated: data.isAuthenticated, sessionData: data.user })
        } catch (error) {
            console.log({ msg: "no funca", error })
        }
        /* const sessionData = localStorage.getItem('session')
         */
    },
    setSessionExpired: (bool) => set({ sessionExpired: bool })
}));

export default useAuthStore