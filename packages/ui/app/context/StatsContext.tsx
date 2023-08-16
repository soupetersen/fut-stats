"use client";

import { findChampionships } from "@/actions/findChampionships";
import { getChampionshipSchedule } from "@/actions/getChampionshipSchedule";
import { getMatchInsights } from "@/actions/getMatchInsights";
import { ChampionshipMatches, Match } from "@/types/ChampionshipMatches";
import { Championship } from "@/types/Championships";
import { MatchInsight } from "@/types/MatchInsight";
import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export interface StatsContextProps {
  match: Match | undefined;
  schedule: ChampionshipMatches | undefined;
  championships: Championship[];
  championshipId: number;
  insights: MatchInsight[] | undefined;
  getMatch: (id: number) => void;
  getSchedule: (id?: number) => void;
  addChampionshipId: (championshipId: number) => void;
  getChampionships: () => void;
  getInsights: (championshipId: number, matchId: number) => void;
}

interface StatsContextProviderProps {
  children: React.ReactNode;
}

export const StatsContext = createContext({} as StatsContextProps);

export function StatsContextProvider({ children }: StatsContextProviderProps) {
  const [match, setMatch] = useState<Match | undefined>();
  const [schedule, setSchedule] = useState<ChampionshipMatches | undefined>();
  const [championshipId, setChampionshipId] = useState(0);
  const [championships, setChampionships] = useState<Championship[]>([]);
  const [insights, setInsight] = useState<MatchInsight[] | undefined>(
    undefined,
  );

  function getMatch(matchId: number) {
    const partidas = schedule?.data.rodadas?.flatMap((rodada) =>
      rodada.partidas.filter((partida) => partida.id === matchId),
    );

    const partida = partidas?.find((partida) => partida.id === matchId);

    if (!partida) {
      toast.error("Error loading match.");
      return;
    }

    toast.success(
      `Match ${partida?.mandante.nome} x ${partida?.visitante.nome} loaded successfully.`,
    );

    setMatch(partida);
  }

  function addChampionshipId(championshipId: number) {
    setChampionshipId(championshipId);
  }

  function getInsights(championshipId: number, matchId: number) {
    getMatchInsights(championshipId.toString(), matchId.toString()).then(
      (data) => {
        setInsight(data.reverse());
      },
    );
  }

  function getSchedule(id?: number) {
    getChampionshipSchedule(id?.toString() ?? championshipId.toString()).then(
      (data) => {
        setSchedule(data);
      },
    );
  }

  function getChampionships() {
    findChampionships().then((data) => {
      setChampionships(data);
    });
  }

  return (
    <StatsContext.Provider
      value={{
        match,
        schedule,
        championships,
        championshipId,
        insights,
        addChampionshipId,
        getMatch,
        getSchedule,
        getChampionships,
        getInsights,
      }}
    >
      {children}
    </StatsContext.Provider>
  );
}
