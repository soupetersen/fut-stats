"use client";

import { Button } from "@/components/ui/button";
import { Championship } from "@/types/Championships";
import { BsChevronRight } from "react-icons/bs";

interface ContentListProps {
  content: Championship;
  buttonOnHover?: boolean;
}

export default function ContentList({
  content,
  buttonOnHover = true,
}: ContentListProps) {
  function findMatches(id: number) {}

  return (
    <li
      className="w-full p-1 flex items-center hover:bg-slate-100"
      onClick={() => findMatches(content.id)}
    >
      <p className="text-sm text-slate-600 text-muted-foreground w-full">
        {content.nome}
      </p>
      <Button variant="outline" disabled={buttonOnHover} size="icon">
        <BsChevronRight className="h-4 w-4" />
      </Button>
    </li>
  );
}
