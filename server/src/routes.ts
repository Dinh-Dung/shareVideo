import { Router } from 'express'
import { UserController } from "./controller/UserController"
import { CategoryController } from './controller/CategoryController'
import { AuthGuard } from './middlewares/jwt'

const router = Router()

const categoryController = new CategoryController()
const userController = new UserController()

router.get('/category/getList', categoryController.getCategory)
router.post('/category/new', categoryController.newCategory)

router.post('/user/login', userController.login)
router.post('/user/register', userController.register)
router.get('/user/getProfile', AuthGuard, userController.getProfile)

export default router