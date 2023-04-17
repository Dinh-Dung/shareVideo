import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Comment } from "../entity/Comment";
import { Users } from "../entity/User";
import { Video } from "../entity/Video";

export class CommentController {
  constructor(
    private userRepository = AppDataSource.getRepository(Users),
    private videoRepository = AppDataSource.getRepository(Video),
    private commentRepository = AppDataSource.getRepository(Comment)
  ) {
    this.commentVideo = this.commentVideo.bind(this);
    this.getCommentVideo = this.getCommentVideo.bind(this);
  }
  async commentVideo(request: Request, response: Response, next: NextFunction) {
    const { userId, videoId, commentText } = request.body;
    try {
      const user = await this.userRepository.findOneBy({ id: userId });
      const video = await this.videoRepository.findOneBy({ id: videoId });

      const comment = new Comment();
      comment.video = video;
      comment.user = user;
      comment.comment = commentText;

      await this.commentRepository.save(comment);
      response.status(200).send("Comment successfully");
    } catch (error) {
      console.log(error);
      return response.status(404).json({
        data: null,
        error: "You can't comment video",
      });
    }
  }
  async getCommentVideo(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const videoId = request.params.videoId;

      const comments = await this.commentRepository
        .createQueryBuilder("comment")
        .leftJoinAndSelect("comment.video", "video")
        .leftJoinAndSelect("comment.user", "user")
        .where("video.id = :id", { id: videoId })
        .getMany();
      return response.status(200).json({
        data: comments,
        error: null,
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        data: null,
        error: "You can't get comment video",
      });
    }
  }
}
