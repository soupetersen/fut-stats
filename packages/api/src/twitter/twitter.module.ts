import { Module } from "@nestjs/common";
import { TwitterController } from "./twitter.controller";
import { TwitterService } from "./twitter.service";
import { Twitter } from "../lib/twitter";
import { TweetsCache } from "src/cache/tweets.cache";

@Module({
  controllers: [TwitterController],
  providers: [TwitterService, Twitter, TweetsCache],
})
export class TwitterModule {}
