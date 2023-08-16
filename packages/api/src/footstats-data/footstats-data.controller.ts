import { Controller, Get } from "@nestjs/common";
import { FootstatsDataService } from "./footstats-data.service";

@Controller("footstats-data")
export class FootstatsDataController {
  constructor(private readonly footstatsDataService: FootstatsDataService) {}

  @Get("championships")
  async getChampionships() {
    return this.footstatsDataService.getChampionships();
  }

  @Get("teams")
  async getTeams() {
    return this.footstatsDataService.getTeams();
  }
}
