import { Entity,PrimaryGeneratedColumn ,CreateDateColumn , Column, OneToMany, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class Report{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content_report: string

    @CreateDateColumn()
    created_at: Date

    @ManyToOne(()=>User, user=>user.report)
    user: User[]
}