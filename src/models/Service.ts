import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity('services')
export class Service extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'name' })
    name!: string

    @OneToMany(() => User, (user) => user.role)
    users!: User[];

}
