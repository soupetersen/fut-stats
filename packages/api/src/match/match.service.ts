import { HttpService } from "@nestjs/axios";
import { ForbiddenException, Injectable } from "@nestjs/common";
import { catchError, map } from "rxjs";
import {
  footstatsSiteApiTypes,
  footstatsSiteApiEndpoint,
} from "../data/footstats-site-api-data";

@Injectable()
export class MatchService {
  constructor(private readonly httpService: HttpService) {}

  async findMatch(championship: number, teamId: number): Promise<any> {
    return this.httpService
      .get(
        `${footstatsSiteApiEndpoint.match}/${footstatsSiteApiTypes.message}/${championship}/${teamId}`,
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
