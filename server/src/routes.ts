import { Router } from 'express'
import { UserController } from "./controller/UserController"
import { CategoryController } from './controller/CategoryController'
import { AuthGuard } from './middlewares/jwt'
import * as multer from "multer"
import { VideoController } from './controller/VideoController'

// Configure Multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const router = Router()

const categoryController = new CategoryController()
const userController = new UserController()
const videoController = new VideoController()

router.get('/category/getList', categoryController.getCategory)
router.post('/category/new', categoryController.newCategory)

router.post('/user/login', userController.login)
router.post('/user/register', userController.register)
router.get('/user/getProfile', AuthGuard, userController.getProfile)
router.get('/user/getAllUser', userController.getAllUser)

router.post('/video/upload', AuthGuard, upload.single('file'), videoController.uploadVideo)
router.get('/video/getList', videoController.getVideoList)

export default router