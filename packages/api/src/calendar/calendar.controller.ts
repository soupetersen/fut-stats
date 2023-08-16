import { Controller, Get, Param } from "@nestjs/common";
import { CalendarService } from "./calendar.service";

@Controller("calendar")
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get(":championshipId")
  async getChampionshipCalendar(
    @Param("championshipId") championshipId: number,
  ) {
    return this.calendarService.getChampionshipCalendar(championshipId);
  }
}
