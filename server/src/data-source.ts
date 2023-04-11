
import "reflect-metadata"
import { DataSource } from "typeorm"

import { Category } from "./entity/Category"
import { Comment } from './entity/Comment';
import { Follow } from "./entity/Follow";
import { Like } from "./entity/Like";
import { Report } from "./entity/Report";
import { User } from "./entity/User";
import { Video } from "./entity/Video";



export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: "share_video",
    synchronize: true,
    logging: false,
    entities: [Category,Comment,Follow,Like,Report,User,Video],
    migrations: [],
    subscribers: [],
})
