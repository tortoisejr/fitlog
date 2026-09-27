"use client";

import { ExerciseContext } from "@/Contexts/ExerciseContext";
import { useContext } from "react";
import { toast } from "react-toastify";

function SaveButton({ ExerDetails }) {
  const { savedExer, setSavedExer } = useContext(ExerciseContext);
  function HandleSaved() {
    const exists = savedExer.some((exercise) => exercise.id === ExerDetails.id);
    if (!exists) {
      setSavedExer([...savedExer, ExerDetails]);
      toast.success("Exercise added to Later plan successfully!");
    } else {
      toast.error("Exercise already added to Later plan");
    }
  }

  return (
    <div>
      <button
        className="text-sm btn btn-outline rounded-lg  text-white space-x-2 px-2.5 py-1.5 cursor-pointer "
        onClick={HandleSaved}
      >
        <i className="fa-regular fa-bookmark"></i>
        <span>Save for later</span>
      </button>
    </div>
  );
}

export default SaveButton;
