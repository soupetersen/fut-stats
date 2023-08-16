"use client";

import { StatsContext } from "@/context/StatsContext";
import { useContext } from "react";

export function useStats() {
  const stats = useContext(StatsContext);
  return stats;
}
