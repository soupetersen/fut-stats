import { Controller, Get, Param } from "@nestjs/common";
import { MatchService } from "./match.service";

@Controller("match")
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get(":championshipId/:matchId")
  async findMatch(
    @Param("championshipId") championshipId: number,
    @Param("matchId") matchId: number,
  ) {
    return this.matchService.findMatch(championshipId, matchId);
  }
}
