import { Module } from "@nestjs/common";
import { CalendarService } from "./calendar.service";
import { CalendarController } from "./calendar.controller";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  providers: [CalendarService],
  controllers: [CalendarController],
})
export class CalendarModule {}
