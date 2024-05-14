import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Role } from "./Role"
import { Appointment } from "./Appointment"

@Entity('useros')
export class Usero extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'first_name' })
    firstName!: string

    @Column({ name: 'last_name' })
    lastName!: string

    @Column({ name: 'email' })
    email!: string
    
    @Column({ name: 'image' })
    image!: string

    @Column({ name: 'password_hash', select: false})
    passwordHash!: string

    @ManyToOne(() => Role, (role) => role.useros)
    @JoinColumn({ name: "role_id" })
    role!: Role;

    @OneToMany(() => Appointment, (appointment) => appointment.usero)
    appointments!: Appointment[];
}
