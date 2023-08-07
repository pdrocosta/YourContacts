import { useContext } from "react"
import { AuthContext } from "../providers/providers"

export const useAuth = () => {
    const authContext = useContext(AuthContext)

    return authContext
}