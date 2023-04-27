import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Like } from "../entity/Like";
import { Follow } from "../entity/Follow";
import { Users } from "../entity/User";

export class SaveAtive {
  constructor(
    private likeRepository = AppDataSource.getRepository(Like),
    private userRepository = AppDataSource.getRepository(Users),
    private followRepository = AppDataSource.getRepository(Follow)
  ) {
    this.getActiveLike = this.getActiveLike.bind(this);
  }

  async getActiveLike(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const { userId, videoId } = request.body;

      return response.status(200).json({
        data: null,
        error: null,
      });
    } catch (error) {
      return response.status(400).json({
        data: null,
        error: "get liked of user failed",
      });
    }
  }
}
