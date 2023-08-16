import { BadRequestException, Injectable } from "@nestjs/common";
import { Twitter } from "../lib/twitter";
import {
  TweetV2CountAllResult,
  TweetV2DeleteTweetResult,
  TweetV2PostTweetResult,
} from "twitter-api-v2";
import { TweetsCache } from "src/cache/tweets.cache";

@Injectable()
export class TwitterService {
  async tweet(message: string): Promise<TweetV2PostTweetResult> {
    const twitter = new Twitter();
    const client = await twitter.twitterClient();

    try {
      const tweeted = await client.v2.tweet(message);
      console.log("tweeted", tweeted);
      const cache = TweetsCache.getInstance();
      cache.set(tweeted.data.id, tweeted.data.text);
      return tweeted;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getCachedTweets() {
    const cache = TweetsCache.getInstance();
    return cache.getAll();
  }

  async deleteTweet(id: string): Promise<TweetV2DeleteTweetResult> {
    const cache = TweetsCache.getInstance();
    const twitter = new Twitter();
    const client = await twitter.twitterClient();

    client.v2.tweetCountAll(id);

    try {
      const deleteResult = await client.v2.deleteTweet(id);
      cache.delete(id);
      return deleteResult;
    } catch (error) {
      throw new BadRequestException(`Error while deleting tweet ${error}`);
    }
  }

  public async countADayTweets(
    account: string,
  ): Promise<TweetV2CountAllResult> {
    const twitter = new Twitter();
    const client = await twitter.twitterClient();

    try {
      const count = await client.v2.tweetCountAll(account, {
        granularity: "day",
      });
      return count;
    } catch (error) {
      throw new BadRequestException(`Error while counting tweets ${error}`);
    }
  }

  // public async tweetImage(image: string): Promise<string> {
  //   console.log(`Twitter: ${image}`);
  //   const twitter = new Twitter();
  //   const client = await twitter.twitterClient();

  //   try {
  //     return client.v2.tweet(image);
  //   } catch (error) {
  //     throw new BadRequestException(`Error while tweeting ${error}`);
  //   }
  // }

  public async readTweet() {
    console.log("Twitter: read tweet");
  }
}
