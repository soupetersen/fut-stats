"use client";

import MatchLive from "./components/MatchLive";
import SelectChampionship from "./components/SelectChampionship";
import Schedule from "./components/Schedule";
import { useStats } from "@/hooks/useStats";

export default function Overview() {
  const { schedule } = useStats();

  return (
    <div className="w-full flex gap-8 overflow-hidden">
      <section className="w-3/5 flex flex-col gap-7 h-full">
        <SelectChampionship />
        <Schedule schedule={schedule} />
      </section>
      <section className="w-full h-full flex">
        <MatchLive />
      </section>
    </div>
  );
}
