import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Video, VideoStatus } from "../entity/Video";

export class AdminController {
  constructor(private videoRepository = AppDataSource.getRepository(Video)) {
    this.getVideoPending = this.getVideoPending.bind(this);
    this.acceptVideoUploaded = this.acceptVideoUploaded.bind(this);
  }

  async getVideoPending(
    request: Request & { file: any },
    response: Response,
    next: NextFunction
  ) {
    try {
      const list = await this.videoRepository.find({
        relations: ["user"],
        where: {
          status: VideoStatus.Pending,
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
        error: "get videos failed",
      });
    }
  }

  async acceptVideoUploaded(
    request: Request & { file: any },
    response: Response,
    next: NextFunction
  ) {
    try {
      const { videoId, accept } = request.body;

      const video = await this.videoRepository.findOneBy({ id: videoId });

      if (!accept) {
        //delete video
        await this.videoRepository.remove(video);
        return response.status(200).json({
          data: "Video deleted !",
          error: null,
        });
      }

      video.status = video.user_request_status;
      await this.videoRepository.save(video);

      return response.status(200).json({
        data: "Video accepted !",
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
