import { Column, CreateDateColumn, Entity, OneToMany,  PrimaryGeneratedColumn } from "typeorm"
import { Contact } from "./contact.entite"


@Entity("clients")
class Client {

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

    @OneToMany(() => Contact, (contact) => contact.client)
    contacts: Contact[]

}

export { Client }