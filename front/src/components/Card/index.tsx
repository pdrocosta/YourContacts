import { ChangeEvent, Dispatch } from "react"
import { api } from "../../services/api"
import { Client } from "../../pages/Home"

interface CardProps {
    client: Client
    setClient: Dispatch<React.SetStateAction<Client[]>>
}

export const Card = ({ client, setClient }: CardProps) => {

    const response = await api.get(`/clients/`, { status: event.target.value })

    response.map((client) => {
        setClient(client)
    })
    
    return (
        <>
            <section>
                <h1>
                {client.name}
                </h1>
                <h2>
                    {client.telephone}
                </h2>
            </section>
        </>
    )
}