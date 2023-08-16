import { HttpService } from "@nestjs/axios";
import { ForbiddenException, Injectable } from "@nestjs/common";
import { catchError, map } from "rxjs";
import { footstatsSiteApiEndpoint } from "../data/footstats-site-api-data";

@Injectable()
export class CalendarService {
  constructor(private readonly httpService: HttpService) {}

  async getChampionshipCalendar(championship: number) {
    return this.httpService
      .get(
        `${footstatsSiteApiEndpoint.championshipCalendar}/${championship}/calendario`,
        {
          headers: {
            Authorization: `Basic ${process.env.STATS_BASIC}`,
          },
        },
      )
      .pipe(map((res) => res.data))
      .pipe(
        catchError((e) => {
          throw new ForbiddenException("API error: " + e.message);
        }),
      );
  }
}
