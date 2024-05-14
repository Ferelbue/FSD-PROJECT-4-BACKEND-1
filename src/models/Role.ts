import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Usero } from "./Usero";

@Entity('roles')
export class Role extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'name' })
    name!: string

    @OneToMany(() => Usero, (usero) => usero.role)
    useros!: Usero[];

}
