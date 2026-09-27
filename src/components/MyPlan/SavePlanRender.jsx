import { ExerciseContext } from "@/Contexts/ExerciseContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

function SavePlanRender({ sortBy }) {
  const { savedExer, setSavedExer } = useContext(ExerciseContext);
  const [sortedExer, setSortedExer] = useState([]);

  useEffect(() => {
    const newArray = [...savedExer];

    if (sortBy === "Duration") {
      newArray.sort((a, b) => Number(a.duration) - Number(b.duration));
    }

    if (sortBy === "Calories") {
      newArray.sort(
        (a, b) => Number(b.caloriesBurned) - Number(a.caloriesBurned),
      );
    }

    if (sortBy === "Rating") {
      newArray.sort((a, b) => Number(b.rating) - Number(a.rating));
    }

    setSortedExer([...newArray]);
  }, [savedExer, sortBy]);

  function HandleDelete(exercise) {
    const newArray = sortedExer.filter((item) => item.id !== exercise.id);
    setSavedExer([...newArray]);
    toast.warning("Exercise removed!");
  }
  return (
    <div>
      {sortedExer.length === 0 ? (
        <div className="flex min-h-56.25 w-full flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-[#0f1115] px-4 text-center">
          <h2 className="text-base font-bold text-white">NOTHING HERE YET</h2>

          <p className="mt-1 text-[10px] text-[#686e78]">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="mt-4 rounded-full bg-[#ccff00] px-5 py-2 text-[10px] font-semibold text-black"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        sortedExer.map((exercise, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-xl border border-white/10 bg-[#15181e] p-3 sm:flex-row sm:items-center"
          >
            {/* Exercise Image */}
            <div className="h-16 w-full shrink-0 overflow-hidden rounded-lg sm:w-28">
              <Image
                src={exercise.image}
                alt="Exercise Image"
                width={100}
                height={100}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Exercise Info */}
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-bold text-white">{exercise.name}</h3>

              <p className="text-[11px] text-[#686e78]">{exercise.equipment}</p>

              <div className="mt-1 flex flex-wrap items-center gap-3 text-[10px] text-[#9ca1aa]">
                <span>
                  <i className="fa-regular fa-clock mr-1 text-[#ccff00]" />
                  {exercise.duration} min
                </span>

                <span>
                  <i className="fa-solid fa-fire mr-1 text-[#ccff00]" />
                  {exercise.caloriesBurned} kcal
                </span>

                <span>
                  <i className="fa-solid fa-star mr-1 text-[#ccff00]" />
                  {exercise.rating}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <Link
                href={`/${exercise.id}`}
                className="rounded-full border border-white/15 px-3 py-2 text-[10px] text-white sm:px-4"
              >
                View Details
              </Link>

              <button
                className="text-[#686e78]"
                onClick={() => HandleDelete(exercise)}
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default SavePlanRender;
