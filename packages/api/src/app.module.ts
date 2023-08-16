import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MatchModule } from "./match/match.module";
import { CalendarModule } from "./calendar/calendar.module";
import { FootstatsDataModule } from "./footstats-data/footstats-data.module";
import { TwitterModule } from "./twitter/twitter.module";
import { Twitter } from "./lib/twitter";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env", ".env.local"],
      isGlobal: true,
    }),
    MatchModule,
    CalendarModule,
    FootstatsDataModule,
    TwitterModule,
  ],
})
export class AppModule {}
