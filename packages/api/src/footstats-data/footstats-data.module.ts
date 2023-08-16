import { Module } from "@nestjs/common";
import { FootstatsDataController } from "./footstats-data.controller";
import { FootstatsDataService } from "./footstats-data.service";

@Module({
  controllers: [FootstatsDataController],
  providers: [FootstatsDataService],
})
export class FootstatsDataModule {}
