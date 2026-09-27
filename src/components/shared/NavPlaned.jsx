"use client";

import { ExerciseContext } from "@/Contexts/ExerciseContext";
import Link from "next/link";
import { useContext } from "react";
function NavPlaned() {
  const { planedExer } = useContext(ExerciseContext);
  return (
    <Link href="./MyPlan" className="flex flex-row gap-2">
      <span>Plan</span>
      <span className="text-black bg-[#c2f800] flex h-6 w-6 items-center justify-center rounded-full">
        {planedExer.length}
      </span>
    </Link>
  );
}

export default NavPlaned;
