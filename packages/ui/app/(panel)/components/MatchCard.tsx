import { getMatchInsights } from "@/actions/getMatchInsights";
import { useStats } from "@/hooks/useStats";
import { Match } from "@/types/ChampionshipMatches";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import Image from "next/image";
import { PiBroadcastLight } from "react-icons/pi";

interface MatchProps {
  match: Match;
  showTime?: boolean;
}

export default function MatchCard({ match, showTime = true }: MatchProps) {
  const { getMatch, championshipId, getInsights } = useStats();

  function openMatch(match: Match) {
    getMatch(match.id);
    getInsights(championshipId, match.id);
  }

  return (
    <div
      className="flex flex-col justify-center min-w-[270px] items-center p-4 hover:bg-slate-100 cursor-pointer"
      onClick={() => openMatch(match)}
    >
      <div className="flex justify-between w-full items-center">
        {showTime && (
          <h1>
            {format(new Date(match.dataHora), "dd MMM - HH:mm", {
              locale: ptBR,
            })}
          </h1>
        )}
        {match.temporeal && (
          <div className="flex items-center bg-red-600 p-1 rounded-lg">
            <h1 className="flex text-base font-medium text-white pr-3 pb-1">
              {" "}
              Live
            </h1>
            <PiBroadcastLight className="text-white" />
          </div>
        )}
      </div>
      <div className="flex w-full items-center">
        <div className="w-full h-full max-w-[40px] flex items-center">
          <Image
            alt={match.mandante.nome}
            src={match.mandante.urlLogo ?? ""}
            width={34}
            height={34}
          />
        </div>
        {!match.temporeal && match.periodoJogo !== "Final" ? (
          <div className="p-2 w-full flex items-center justify-between">
            <h3 className="text-slate-400 p-1">{match.mandante.sigla}</h3>
            <span className="text-slate-400">{match.periodoJogo}</span>
            <h3 className="text-slate-400 p-1">{match.visitante.sigla}</h3>
          </div>
        ) : (
          <div className="p-2 flex items-center">
            <h3 className="text-slate-400 p-1">{match.mandante.sigla}</h3>
            <div className="flex flex-col justify-center items-center">
              <div className="flex">
                <h2 className="mx-1 font-bold text-xl">
                  {match.mandante.gols}
                </h2>
                <span className="mx-1 font-bold">x</span>
                <h2 className="mx-1 font-bold text-xl">
                  {match.visitante.gols}
                </h2>
              </div>
              <span className="text-slate-400">{match.periodoJogo}</span>
            </div>
            <h3 className="text-slate-400 p-1">{match.visitante.sigla}</h3>
          </div>
        )}
        <div className="w-full h-full max-w-[40px] flex items-center">
          <Image
            alt={match.visitante.nome}
            src={match.visitante.urlLogo ?? ""}
            width={34}
            height={34}
          />
        </div>
      </div>
    </div>
  );
}
