import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { Service } from "./Service"

@Entity('appointments')
export class Appointment extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'first_name' })
    firstName!: string

    @Column({ name: 'last_name' })
    lastName!: string

    @Column({ name: 'email' })
    email!: string

    @Column({ name: 'password_hash' })
    passwordHash!: string

    @ManyToOne(() => User, (user) => user.appointment)
    @JoinColumn({ name: "user_id" })
    role!: User;
    
    @ManyToOne(() => Service, (service) => service.appointment)
    @JoinColumn({ name: "service_id" })
    service!: Service[];
}