import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { Users } from "../entity/User"
import { genSalt, hash, compare } from 'bcrypt'
import * as jwt from 'jsonwebtoken'

export class UserController {
    constructor(
        private userRepository = AppDataSource.getRepository(Users)
    ) {
        this.login = this.login.bind(this)
        this.register = this.register.bind(this)
        this.getProfile = this.getProfile.bind(this)
        this.getAllUser = this.getAllUser.bind(this)
    }
    
    async login(request: Request, response: Response, next: NextFunction) {
        try {
            const { username, password } = request.body;

            const user = await this.userRepository.findOneBy({ username }) // Select * from User where username = username

            // Comparing password
            const isValid = await compare(password, user.password)
            if (!isValid) {
                return {
                    data: null,
                    error: 'Username or password is not valid !',
                    status: 401
                }
            }

            const accessToken = jwt.sign(
                { userId: user.id, username: user.username },
                process.env.JWT_SECRET,
                { expiresIn: '1h'}
            )

            return response.status(200).json({
                data: {
                    access_token: accessToken
                },
                error: null
            })
            
        } catch (error) {
            console.log()
            return response.status(401).json({
                data: null,
                error: 'Username or password is not valid !',
                status: 401
            })
        }
    }

    async register(request: Request, response: Response, next: NextFunction){
        try {
            const { fullname, username, nickname, password, email, address } = request.body;

            // Hasing password
            const saltRounds = 10;
            const salt = await genSalt(saltRounds);
            const hashedPassword = await hash(password, salt);
            // Random nickname
            const randomNuber:number = Math.floor(Math.random()*1000)
            const nicknameRandom:string = `user${randomNuber}`

            const user = Object.assign(new Users(), {
                fullname,
                username,
                nickname:nicknameRandom,
                email,
                address,
                password: hashedPassword
            })

            const newUser =  await this.userRepository.save(user)
            return response.status(201).json({
                data: newUser,
                error: null
            })
        } catch (error) {
            console.log(error)
            return response.status(400).json({
                data: null,
                error: "Create failed"

            })

        }

    }

    async getProfile(request: Request, response: Response, next: NextFunction) {
        try {
            const userId = request['userId']

            const user = await this.userRepository.findOneBy({ id: userId })
            
            return response.status(200).json({
                data: user,
                error: null
            })
        } catch (error) {
            return response.sendStatus(403)
        }
    }
    async getAllUser(request: Request, response: Response, next: NextFunction) {
        try {
            const userId = request['userId']

            const user = await this.userRepository.find()            
            return response.status(200).json({
                data: user,
                error: null
            })
        } catch (error) {
            return response.sendStatus(403)
        }
    }
}

