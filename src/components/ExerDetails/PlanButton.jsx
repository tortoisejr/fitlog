"use client";

import { ExerciseContext } from "@/Contexts/ExerciseContext";
import { useContext } from "react";
import { toast } from "react-toastify";

function PlanButton({ ExerDetails }) {
  const { planedExer, setPlanedExer } = useContext(ExerciseContext);
  function HandlePlaned() {
    const exists = planedExer.some(
      (exercise) => exercise.id === ExerDetails.id,
    );
    if (!exists) {
      setPlanedExer([...planedExer, ExerDetails]);
      toast.success("Exercise added to Today's plan successfully!");
    } else {
      toast.error("Exercise already added to Today's plan");
    }
  }

  return (
    <div>
      <button
        className="text-sm rounded-lg bg-[#ccff00] text-[#232b12] space-x-2 px-2.5 py-2 cursor-pointer "
        onClick={HandlePlaned}
      >
        <i className="fa-regular fa-calendar-plus"></i>
        <span>Add to today&apos;s plan</span>
      </button>
    </div>
  );
}

export default PlanButton;
