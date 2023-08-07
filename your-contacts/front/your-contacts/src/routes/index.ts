import { HomePage } from "../pages/Home"
import { Login } from "../pages/Login"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path= "/" element = {< Login />}
            <Route path="/home" element = {<HomePage/>}
        </Routes>
    )
}