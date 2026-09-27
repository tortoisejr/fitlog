"use client";

import { ExerciseContext } from "@/Contexts/ExerciseContext";
import Link from "next/link";
import { useContext } from "react";

function NavSaved() {
  const { savedExer } = useContext(ExerciseContext);
  return (
    <Link href="./MyPlan" className="flex flex-row gap-2">
      <span>Saved</span>
      <span className="text-white border border-amber-50 flex h-6 w-6 items-center justify-center rounded-full">
        {savedExer.length}
      </span>
    </Link>
  );
}

export default NavSaved;
