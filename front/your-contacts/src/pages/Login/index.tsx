import { useForm } from "react-hook-form"
import { TLogin, loginSchema } from "./validators"
import { AuthProvider } from "../../providers/providers"


export const Login = () => {
    const { register, handleSubmit } = useForm<TLogin>({
        resolver: zodResolver(loginSchema)
    })

    return (
        <main>
            <h2>Login to view Your Contacts</h2>
            <form onSubmit={handleSubmit(AuthProvider.signIn)}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register("password")} />
                <button type="submit" >Login</button>
            </form>
        </main>
    )
}