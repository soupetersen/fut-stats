"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useStats } from "@/hooks/useStats";
import { Championship } from "@/types/Championships";
import { useEffect } from "react";

export default function SelectChampionship() {
  const { championships, getChampionships, getSchedule, addChampionshipId } =
    useStats();

  useEffect(() => {
    getChampionships();
  }, []);

  function handleFindChampionshipSchedule(data: string) {
    const championship = championships.find(
      (championship) => championship.nome === data,
    );

    if (!championship) return;

    addChampionshipId(championship?.id);

    getSchedule(championship?.id);
  }

  return (
    <Card className="w-full overflow-hidden min-h-[9rem]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
        <CardTitle className="text-xl font-medium">Campeonatos</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        <Select onValueChange={handleFindChampionshipSchedule}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione o campeonato" />
          </SelectTrigger>
          <SelectContent className="h-48">
            <SelectGroup>
              <SelectLabel>Campeonatos</SelectLabel>
              {championships.length > 0 &&
              championships?.map((championship: Championship) => (
                <SelectItem key={championship.id} value={championship.nome}>
                  {championship.nome}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}
