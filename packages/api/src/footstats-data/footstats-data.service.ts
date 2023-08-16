import { Injectable } from "@nestjs/common";
import {
  footstatsChampionships,
  footstatsTeams,
} from "../data/footstats-site-api-data";

@Injectable()
export class FootstatsDataService {
  async getChampionships() {
    return footstatsChampionships;
  }

  async getTeams() {
    return footstatsTeams;
  }
}
