import { Injectable } from "@nestjs/common";
import { TwitterApi } from "twitter-api-v2";

@Injectable()
export class Twitter {
  async twitterClient(): Promise<TwitterApi> {
    return new TwitterApi({
      appKey: process.env.TWITTER_API_KEY ?? "",
      appSecret: process.env.TWITTER_API_SECRET ?? "",
      accessToken: process.env.TWITTER_ACCESS_TOKEN ?? "",
      accessSecret: process.env.TWITTER_ACCESS_SECRET ?? "",
    });
  }
}
