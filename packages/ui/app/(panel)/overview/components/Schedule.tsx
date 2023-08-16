"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useStats } from "@/hooks/useStats";
import {
  ChampionshipMatches,
  Match as MatchType,
} from "@/types/ChampionshipMatches";
import { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import MatchCard from "../../components/MatchCard";

interface ScheduleProps {
  schedule?: ChampionshipMatches;
}

export default function Schedule({ schedule }: ScheduleProps) {
  const { getSchedule } = useStats();
  const [index, setIndex] = useState(
    schedule?.data.rodadas?.find((r) => r.rodadaAtual === true)?.rodada ?? 1,
  );

  useEffect(() => {
    let timeout: NodeJS.Timer | null = null;
    timeout = setTimeout(() => {
      if (schedule && schedule.data.rodadas) {
        const rodada = schedule.data.rodadas.find(
          (r) => r.rodadaAtual === true,
        )?.rodada;

        getSchedule();

        if (rodada) {
          setIndex(rodada - 1);
        }
      }
    }, Math.random() * 10 * 10000);
    return () => {
      if (timeout) clearInterval(timeout);
    };
  }, [index, schedule]);

  function changeIndex(value: number) {
    if (!schedule?.data.rodadas) return;

    if (value < 1) {
      setIndex(1);
    } else if (value > schedule?.data.rodadas.length - 1) {
      setIndex(schedule?.data.rodadas.length - 1);
    } else {
      setIndex(value);
    }
  }

  return (
    <Card className="w-full h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-xl font-medium">Partidas</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col p-0">
        <div className="flex w-full justify-between pb-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => changeIndex(index - 1)}
          >
            <BsChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-base font-medium">Rodada: {index}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => changeIndex(index + 1)}
          >
            <BsChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-wrap p-2 w-full h-[25rem] justify-between overflow-auto">
          {schedule &&
            schedule.data.rodadas &&
            schedule.data.rodadas[index > 0 ? index - 1 : 1]?.partidas.map(
              (match: MatchType) => <MatchCard key={match.id} match={match} />,
            )}
        </div>
      </CardContent>
    </Card>
  );
}
