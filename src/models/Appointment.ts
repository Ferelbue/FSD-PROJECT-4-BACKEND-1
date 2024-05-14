import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Usero } from "./Usero"
import { Service } from "./Service"

@Entity('appointments')
export class Appointment extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'appointment_date' })
    appointmentDate!: Date

    @ManyToOne(() => Usero, (usero) => usero.appointments)
    @JoinColumn({ name: "user_id" })
    usero!: Usero;
    
    @ManyToOne(() => Service, (service) => service.appointments)
    @JoinColumn({ name: "service_id" })
    service!: Service;
}