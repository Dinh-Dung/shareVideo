import { CommentController } from "./controller/CommentController";
import { Router } from "express";
import { UserController } from "./controller/UserController";
import { CategoryController } from "./controller/CategoryController";
import { AuthGuard } from "./middlewares/jwt";
import * as multer from "multer";
import { VideoController } from "./controller/VideoController";
import { LikeController } from "./controller/LikeController";
import { FollowController } from "./controller/FollowController";

// Configure Multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = Router();

const categoryController = new CategoryController();
const userController = new UserController();
const videoController = new VideoController();
const likeController = new LikeController();
const followController = new FollowController();
const commentController = new CommentController();
// category
router.get("/category/getList", categoryController.getCategory);
router.post("/category/new", categoryController.newCategory);
//user
router.post("/user/login", userController.login);
router.post("/user/register", userController.register);
router.get("/user/getProfile", AuthGuard, userController.getProfile);
router.get("/user/getAllUser", userController.getAllUser);
// video
router.post(
  "/video/upload",
  AuthGuard,
  upload.single("file"),
  videoController.uploadVideo
);
router.get("/video/getList", videoController.getVideoList);
router.get(
  "/video/getUserVideoList/:id",
  AuthGuard,
  videoController.getUserVideoList
);
// like
router.post("/like/likeVideo", AuthGuard, likeController.likeVideo);
router.post("/like/unlike", AuthGuard, likeController.unlikeVideo);
router.get("/like/getLikeCount/:videoId", likeController.likeCountOfVideo);
// follow
router.post("/follow/followUser", AuthGuard, followController.followUser);
router.post("/follow/unFollow", AuthGuard, followController.unfollowUser);
router.get("/follow/getFollowUser/:userId", followController.getFollowUser);
//comment
router.post("/comment/commentVideo", AuthGuard, commentController.commentVideo);
router.get(
  "/comment/getCommentVideo/:videoId",
  AuthGuard,
  commentController.getCommentVideo
);
export default router;
