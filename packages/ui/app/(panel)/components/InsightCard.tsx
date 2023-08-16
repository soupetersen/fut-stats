import { sendTweet } from "@/actions/sendTweet";
import { Button } from "@/components/ui/button";
import { MatchInsight } from "@/types/MatchInsight";
import Image from "next/image";
import TweetDialog from "./TweetDialog";
import { useState } from "react";

const LOGO =
  "https://www.footstats.com.br/assets/images/svg/icon-empate-cinza.svg";

interface InsightCardProps {
  insight?: MatchInsight;
}

export default function InsightCard({ insight }: InsightCardProps) {
  return (
    <div
      className={`flex items-center gap-2 w-full h-9 bg-slate-100 rounded-sm p-7 border-l-4`}
      style={{ borderColor: insight?.color }}
    >
      <Image
        alt={insight?.idTeam.toString() ?? ""}
        src={insight?.teamLogoUrl ?? LOGO}
        width={32}
        height={32}
      />
      <h2 className="w-full">{insight?.message}</h2>
      <TweetDialog insight={insight} />
    </div>
  );
}
