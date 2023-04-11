import { Entity,PrimaryGeneratedColumn ,CreateDateColumn , Column, OneToMany, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class Follow{
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    created_at: Date

    @ManyToOne(()=>User, user=>user.follow)
    user: User[]
}