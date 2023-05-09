import { CommentController } from "./controller/CommentController";
import { Router } from "express";
import { UserController } from "./controller/UserController";
import { CategoryController } from "./controller/CategoryController";
import { AuthGuard } from "./middlewares/jwt";
import * as multer from "multer";
import { VideoController } from "./controller/VideoController";
import { LikeController } from "./controller/LikeController";
import { FollowController } from "./controller/FollowController";
import { SaveActive } from "./controller/SaveAtiveController";
import { AdminController } from "./controller/AdminController";

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
const saveActiveController = new SaveActive();
const adminController = new AdminController();

// category
router.get("/category/getList", categoryController.getCategory);
router.post("/category/new", categoryController.newCategory);
//user
router.post("/user/login", userController.login);
router.get("/user/refresh-token", userController.refreshToken);
router.post("/user/register", userController.register);
router.get("/user/getProfile", AuthGuard, userController.getProfile);
router.get("/user/getAllUser", userController.getAllUser);
router.get(
  "/user/getUserFollowers/:userId",
  AuthGuard,
  userController.getUserFollowers
);
router.get("/user/randomUsersSuggest", userController.randomUsersSuggest);
router.get(
  "/user/getProfileAndVideoByNickname/:nickname",
  AuthGuard,
  userController.getProfileAndVideoByNickname
);
// video,
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
router.get(
  "/video/getVideoAndCommentById/:videoId",
  videoController.getVideoAndCommentById
);
router.get("/video/getVideoToday", videoController.getVideoToday);
router.get(
  "/video/getVideoFollower/:userId",
  AuthGuard,
  videoController.getVideoFollower
);
// like
router.post("/like/likeVideo", AuthGuard, likeController.likeVideo);
router.post("/like/unlike", AuthGuard, likeController.unlikeVideo);
router.get("/like/getLikeCount/:videoId", likeController.likeCountOfVideo);
router.post(
  "/like/getActiveLike",
  AuthGuard,
  saveActiveController.getActiveLike
);
// follow
router.post("/follow/followUser", AuthGuard, followController.followUser);
router.post("/follow/unFollow", AuthGuard, followController.unfollowUser);
router.get("/follow/getFollowUser/:userId", followController.getFollowUser);
router.post(
  "/follow/getActiveFollow",
  AuthGuard,
  saveActiveController.getActiveFollow
);
//comment
router.post("/comment/commentVideo", AuthGuard, commentController.commentVideo);
router.post(
  "/comment/deleteComment",
  AuthGuard,
  commentController.deleteCommentVideo
);
router.get(
  "/comment/getCommentVideo/:videoId",
  commentController.getCommentVideo
);

//admin
router.get(
  "/admin/getPendingVideos",
  AuthGuard,
  adminController.getVideoPending
);

router.post(
  "/admin/acceptPendingVideo",
  AuthGuard,
  adminController.acceptVideoUploaded
);

export default router;
