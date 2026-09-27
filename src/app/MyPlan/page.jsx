"use client";

import SavePlanRender from "@/components/MyPlan/SavePlanRender";
import TodayPlanRender from "@/components/MyPlan/TodayPlanRender";
import { ExerciseContext } from "@/Contexts/ExerciseContext";
import { useContext, useEffect, useState } from "react";

function MyPlan() {
  const [exercise, setExercise] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [calories, setCalories] = useState(0);
  const { planedExer, savedExer } = useContext(ExerciseContext);
  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("Duration");

  useEffect(() => {
    HandleTabChange();
  });

  function HandleTabChange() {
    if (activeTab === "plan") {
      if (planedExer.length > 0) {
        setExercise(planedExer.length);
        setMinutes(
          planedExer.reduce(
            (total, exercise) => total + Number(exercise.duration),
            0,
          ),
        );
        setCalories(
          planedExer.reduce(
            (total, exercise) => total + Number(exercise.caloriesBurned),
            0,
          ),
        );
      } else {
        setExercise(0);
        setMinutes(0);
        setCalories(0);
      }
    } else {
      if (savedExer.length > 0) {
        setExercise(savedExer.length);
        setMinutes(
          savedExer.reduce(
            (total, exercise) => total + Number(exercise.duration),
            0,
          ),
        );
        setCalories(
          savedExer.reduce(
            (total, exercise) => total + Number(exercise.caloriesBurned),
            0,
          ),
        );
      } else {
        setExercise(0);
        setMinutes(0);
        setCalories(0);
      }
    }
  }

  return (
    <div className="container mx-1 lg:mx-auto mt-5 lg:mt-10">
      <h1 className="text-2xl text-white font-bold">MY PLAN</h1>
      <p className="text-[#5f6570] text-[12px]">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="grid grid-cols-3  items-center bg-[#13161d] outline outline-white/20 rounded-2xl h-27 px-10 py-8 mt-8">
        <div className="flex flex-col gap-1 items-start">
          <h5 className="text-[12px] text-[#5f6570]">Exercise</h5>
          <p className="text-[#ccff00] text-2xl font-bold">{exercise}</p>
        </div>
        <div className="flex flex-col gap-1 items-start">
          <h5 className="text-[12px] text-[#5f6570]">Minutes</h5>
          <p className="text-white text-2xl font-bold">{minutes}</p>
        </div>
        <div className="flex flex-col gap-1 items-start">
          <h5 className="text-[12px] text-[#5f6570]">Calories</h5>
          <p className="text-white text-2xl font-bold">{calories}</p>
        </div>
      </div>

      <section className="w-full mt-15">
        {/* Top controls */}
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Plan / Saved switch */}
          <div className="flex w-fit rounded-xl border border-white/10 bg-[#15181e] p-1">
            <button
              onClick={() => {
                setActiveTab("plan");
                HandleTabChange();
              }}
              className={`rounded-lg px-4 py-1.5 text-xs transition-all sm:px-5 ${
                activeTab === "plan"
                  ? "bg-[#20242c] text-white shadow-sm"
                  : "text-[#686e78] hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => {
                setActiveTab("saved");
                HandleTabChange();
              }}
              className={`rounded-lg px-5 py-1.5 text-xs transition-all ${
                activeTab === "saved"
                  ? "bg-[#20242c] font-semibold text-white shadow-sm"
                  : "text-[#686e78] hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort */}
          <div className="flex w-fit items-center gap-2">
            <span className="text-xs text-[#686e78]">Sort By</span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                }}
                className="w-26.25 appearance-none rounded-lg border border-white/10 bg-[#15181e] py-1.5 pl-3 pr-8 text-xs text-white outline-none"
              >
                <option value="Duration">Duration</option>
                <option value="Calories">Calories</option>
                <option value="Rating">Rating</option>
              </select>

              <i className="fa-solid fa-chevron-down pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-[#686e78]" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full h-auto">
          {activeTab === "plan" ? (
            <TodayPlanRender sortBy={sortBy}></TodayPlanRender>
          ) : (
            <SavePlanRender sortBy={sortBy}></SavePlanRender>
          )}
        </div>
      </section>
    </div>
  );
}

export default MyPlan;
