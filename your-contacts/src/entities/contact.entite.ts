import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Client } from "./client.entitie"


@Entity("contacts")
class Contact {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 45 })
    name: string

    @Column({ type: 'varchar', length: 45, unique: true })
    email: string

    @Column({ type: 'varchar', length: 11 })
    telephone: string

    @CreateDateColumn({ type: 'date' })
    createdAt: Date

    @ManyToOne(() => Client, (client)=> client.contacts)
    client: Client
}

export { Contact }