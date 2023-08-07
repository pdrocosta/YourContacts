import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { TLogin } from "../pages/Login/validators";

interface AuthProviderProps {
    children: ReactNode
}

interface LoginResponse {
    token: string
}

interface AuthContextValues {
    signIn: (data: TLogin) => void
    loading: boolean
}

export const AuthContext = createContext({} as AuthContextValues)

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("your-contacts:token")
        if (!token) {
            setLoading(false)
            return
        }
        api.defaults.headers.common.Authorization = `Bearer ${token}`
        setLoading(false)

    }, [])

    const signIn = async (data: TLogin) => {

        try {
            const response = await api.post<LoginResponse>("/login", data)
            const { token } = response.data
            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("your-contacts:token", token)
            setLoading(false)
            navigate("homepage")
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, loading }}>
            {children}
        </AuthContext.Provider>
    )
}