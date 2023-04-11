import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {Comment} from './Comment'
import { User } from "./User";
import { Category } from "./Category";

@Entity()
export class Video {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string 

    @Column()
    url: string

    @Column()
    view: number

    @UpdateDateColumn()
    update_at: Date

    @CreateDateColumn()
    created_at: Date

    @ManyToOne(()=>User, user => user.video)
    user: User[]
    
    @OneToMany(()=> Comment, comment=> comment.video)
    comment: Comment[]

    @ManyToMany(()=>Category, category=> category.video)
    @JoinTable()
    category: Category[]
}