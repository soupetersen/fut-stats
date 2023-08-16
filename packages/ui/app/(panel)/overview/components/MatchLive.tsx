"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MatchCard from "../../components/MatchCard";
import { useStats } from "@/hooks/useStats";
import { useEffect } from "react";
import InsightCard from "@/(panel)/components/InsightCard";

export default function MatchLive() {
  const { match, championshipId, insights, getInsights } = useStats();

  useEffect(() => {
    let timeout: NodeJS.Timer | null = null;

    timeout = setTimeout(() => {
      if (championshipId && match) {
        getInsights(championshipId, match.id);
      }
    }, 10 * 1000);

    return () => {
      if (timeout) clearInterval(timeout);
    };
  }, [match, insights]);

  return (
    <Card className="w-full h-full">
      <CardHeader className="flex flex-row h-full max-h-[76px] items-center justify-between pb-4">
        <CardTitle className="text-xl font-medium">Partida</CardTitle>
        {match && <MatchCard match={match} showTime={false} />}
      </CardHeader>
      <CardContent className="flex flex-col h-[37.8rem] gap-4 overflow-auto">
        {match &&
          insights &&
          insights?.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
      </CardContent>
    </Card>
  );
}
