import { NextFunction, Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";
import { Video, VideoStatus } from "../entity/Video";
import { AppDataSource } from "../data-source";
import { Users } from "../entity/User";
import { Category } from "../entity/Category";
import { Equal } from "typeorm";
import { Comment } from "../entity/Comment";

// Configuration
cloudinary.config({
  cloud_name: "sharevideo",
  api_key: "682649932695991",
  api_secret: "P6eBhTnHTDFDGXmZ_911cv1Tokg",
});

interface UploadVideoDTO {
  description: string;
  user_request_status: VideoStatus;
  category_id: number;
}

export class VideoController {
  constructor(
    private videoRepository = AppDataSource.getRepository(Video),
    private userRepository = AppDataSource.getRepository(Users),
    private categoryRepository = AppDataSource.getRepository(Category)
  ) {
    this.uploadVideo = this.uploadVideo.bind(this);
    this.getVideoList = this.getVideoList.bind(this);
    this.getUserVideoList = this.getUserVideoList.bind(this);
    this.getVideoAndCommentById = this.getVideoAndCommentById.bind(this);
    this.getVideoToday = this.getVideoToday.bind(this);
  }

  async uploadVideo(
    request: Request & { file: any },
    response: Response,
    next: NextFunction
  ) {
    try {
      const videoData: UploadVideoDTO = request.body;
      const userId = request["userId"];

      const user = await this.userRepository.findOneBy({ id: userId });
      const category = await this.categoryRepository.findOneBy({
        id: videoData.category_id,
      });

      const videoRepository = this.videoRepository;

      const videoBuffer = request.file.buffer;
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: "video" },
        async function (error, result) {
          if (error) {
            return response.status(400).json({
              data: null,
              error: "upload failed",
            });
          }

          const videoURL = result.url;

          const newVideo = Object.assign(new Video(), {
            description: videoData.description,
            user_request_status: videoData.user_request_status,
            user,
            category: [category],
            url: videoURL,
          });

          const uploaded = await videoRepository.save(newVideo);

          return response.status(200).json({
            data: uploaded,
            error: null,
          });
        }
      );

      stream.end(videoBuffer);
    } catch (error) {
      return response.status(400).json({
        data: null,
        error: "upload failed",
      });
    }
  }

  async getVideoList(
    request: Request & { file: any },
    response: Response,
    next: NextFunction
  ) {
    try {
      const list = await this.videoRepository.find({
        relations: ["user"],
        where: {
          status: VideoStatus.Public,
        },
      });

      const shuffledList = list.sort(() => Math.random() - 0.5);
      return response.status(200).json({
        data: shuffledList,
        error: null,
      });
    } catch (error) {
      return response.status(400).json({
        data: null,
        error: "get video failed",
      });
    }
  }

  async getUserVideoList(
    request: Request & { file: any },
    response: Response,
    next: NextFunction
  ) {
    try {
      const userId = request.params.id;
      const list = await this.videoRepository
        .createQueryBuilder("video")
        .leftJoinAndSelect("video.user", "user")
        .where("user.id = :userId", { userId })
        .andWhere("video.status != :status", { status: VideoStatus.Pending })
        .getMany();

      return response.status(200).json({
        data: list,
        error: null,
      });
    } catch (error) {
      return response.status(400).json({
        data: null,
        error: "get user video failed",
      });
    }
  }

  async getVideoAndCommentById(
    request: Request & { file: any },
    response: Response,
    next: NextFunction
  ) {
    try {
      const videoId = request.params.videoId;
      const videoById = await this.videoRepository
        .createQueryBuilder("video")
        .leftJoinAndSelect("video.user", "user")
        .leftJoinAndSelect("video.comment", "comment")
        .leftJoinAndSelect("comment.user", "commentUser")
        .where("video.id = :id", { id: videoId })
        .getOne();

      return response.status(200).json({
        data: videoById,
        error: null,
      });
    } catch (error) {
      return response.status(400).json({
        data: null,
        error: "get video failed",
      });
    }
  }
  async getVideoToday(
    request: Request & { file: any },
    response: Response,
    next: NextFunction
  ) {
    try {
      const newestVideos = await this.videoRepository
        .createQueryBuilder("video")
        .where("video.status = :status", { status: VideoStatus.Public })
        .orderBy("video.created_at", "DESC")
        .take(20)
        .getMany();
      return response.status(200).json({
        data: newestVideos,
        error: null,
      });
    } catch (error) {
      return response.status(400).json({
        data: null,
        error: "get video failed",
      });
    }
  }
}
