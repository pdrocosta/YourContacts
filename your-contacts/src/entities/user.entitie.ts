import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("user")
class User{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 45, unique: true })
    email: string
    
    @Column({ type: 'varchar', length: 22})
    password: string
}

export {User}