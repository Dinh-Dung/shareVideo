import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Follow } from "../entity/Follow";
import { Users } from "../entity/User";

export class FollowController {
  constructor(
    private followRepository = AppDataSource.getRepository(Follow),
    private userRepository = AppDataSource.getRepository(Users)
  ) {
    this.followUser = this.followUser.bind(this);
    this.getFollowUser = this.getFollowUser.bind(this);
    this.unfollowUser = this.unfollowUser.bind(this);
  }
  async followUser(request: Request, response: Response, next: NextFunction) {
    const { userId } = request.body;

    try {
      const user = await this.userRepository.findOneBy({ id: userId });
      if (!user) {
        throw new Error(`User with id ${userId} not found`);
      }
      const follow = new Follow();
      follow.user = user;
      await this.followRepository.save(follow);
      return response.status(200).send("Follow user successfully");
    } catch (error) {
      console.log(error);
      return response.status(404).json({
        data: null,
        error: "You can't follow user",
      });
    }
  }
  async getFollowUser(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const userId = request.params.userId;
      const queryBuilder = this.followRepository
        .createQueryBuilder("follow")
        .leftJoinAndSelect("follow.user", "user")
        .where("user.id = :id", { id: userId });
      const followers = await queryBuilder.getMany();
      return response.status(200).json({
        data: followers,
        error: null,
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        data: null,
        error: "You can't get follow user",
      });
    }
  }
  async unfollowUser(request: Request, response: Response, next: NextFunction) {
    const { userId } = request.body;
    try {
      const follow = await this.followRepository.findOne({
        where: { user: { id: userId } },
        order: { id: "DESC" },
      });

      await this.followRepository.remove(follow);

      return response.status(200).send("Unfollow user successfully");
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        data: null,
        error: "You can't unlike follow user",
      });
    }
  }
}
