import { Entity, PrimaryGeneratedColumn, CreateDateColumn , Column, OneToMany, ManyToOne } from "typeorm"
import { User } from "./User"
import {Video} from './Video'


@Entity()
export class Like{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    like:number
    
    @CreateDateColumn()
    create_at: Date

    @ManyToOne(()=>Video, video =>video.comment)
    video: Video[]

    @ManyToOne(()=> User, user=> user.like)
    user: User[]
}