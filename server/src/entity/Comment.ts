import { Entity, PrimaryGeneratedColumn, CreateDateColumn , Column, OneToMany, ManyToOne } from "typeorm"
import {Video} from './Video'
import { User } from "./User"


@Entity()
export class Comment{
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    comment:string
    
    @CreateDateColumn()
    create_at: Date

    @ManyToOne(()=>Video, video =>video.comment)
    video: Video[]

    @ManyToOne(()=> User, user=> user.comment)
    user: User[]
}