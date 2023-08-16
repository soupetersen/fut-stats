import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { TwitterService } from "./twitter.service";
import {
  TweetV2CountAllResult,
  TweetV2DeleteTweetResult,
  TweetV2PostTweetResult,
} from "twitter-api-v2";

@Controller("twitter")
export class TwitterController {
  constructor(private readonly twitterService: TwitterService) {}

  @Post("tweet")
  async postTweet(
    @Body("message") message: string,
  ): Promise<TweetV2PostTweetResult> {
    console.log("sending tweet");
    return await this.twitterService.tweet(message);
  }

  @Post("image")
  async postImage(@Param("image") image: string) {
    // return await this.twitterService.tweetImage(image);
  }

  @Get("cache")
  async getCache(): Promise<string[]> {
    return await this.twitterService.getCachedTweets();
  }

  @Delete("tweet/:id")
  async delete(@Param("id") id: string): Promise<TweetV2DeleteTweetResult> {
    return await this.twitterService.deleteTweet(id);
  }

  @Get("tweet/:account")
  async getTweetCount(
    @Param("account") account: string,
  ): Promise<TweetV2CountAllResult> {
    return await this.twitterService.countADayTweets(account);
  }
}
