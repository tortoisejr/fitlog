import PlanButton from "@/components/ExerDetails/PlanButton";
import SaveButton from "@/components/ExerDetails/SaveButton";
import Image from "next/image";

async function fetchData() {
  try {
    const response = await fetch(
      "https://api.api-store.workers.dev/api/fitlog",
    );
    const result = await response.json();
    return result;
  } catch (err) {
    return [];
  }
}

async function page({ params }) {
  const allExerData = await fetchData();
  const { ExerId } = await params;

  const ExerDetails = allExerData.find(
    (item) => String(item.id) === String(ExerId),
  );
  if (!ExerDetails) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="aura text-orange-600">
          <div className="card bg-base-100 text-base-content ">
            <div className="card-body">
              <div className="flex flex-col lg:flex-row items-center gap-4 h-20 lg:h-30 w-50  lg:w-70">
                <p className="text-2xl font-bold">404</p>
                <p>This page could not be found</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="container mx-auto my-7 px-4 lg:my-10">
      <div className="overflow-hidden ">
        <div className="grid lg:grid-cols-5">
          {/* Exercise Cover */}
          <div className="flex items-center justify-center  lg:col-span-2 lg:p-12">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={ExerDetails.image}
                alt={"Exercise Photo"}
                width={300}
                height={420}
                className="h-87.5 w-full object-cover sm:h-105 lg:h-180"
              />
            </div>
          </div>

          {/* Exercise  Information */}
          <div className="flex flex-col gap-4 lg:gap-5 p-6 sm:p-8 lg:col-span-3 lg:p-12">
            {/* name */}
            <h1 className="text-2xl text-white font-bold">
              {ExerDetails.name}
            </h1>
            {/* description */}
            <p className="text-[#787e88] text-[12px]">
              {ExerDetails.description}
            </p>
            {/* muscles */}
            <div className="space-x-2">
              {ExerDetails.muscleGroups.map((muscle, index) => (
                <button
                  className="bg-[#c2f800] text-[#212a00] text-[12px] rounded-2xl px-1.5 font-bold "
                  key={index}
                >
                  {muscle}
                </button>
              ))}
            </div>
            {/* details Table */}
            <div className="overflow-hidden rounded-2xl border border-[#242832] bg-[#151922]">
              <div className="flex items-center justify-between border-b border-[#242832] px-5 py-3">
                <span className="text-[11px] font-bold uppercase text-[#858b97]">
                  Equipment
                </span>
                <span className="text-sm text-[#d5d7dc]">
                  {ExerDetails.equipment}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#242832] px-5 py-3">
                <span className="text-[11px] font-bold uppercase text-[#858b97]">
                  Difficulty
                </span>
                <span className="text-sm text-[#d5d7dc]">
                  {ExerDetails.difficulty}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#242832] px-5 py-3">
                <span className="text-[11px] font-bold uppercase text-[#858b97]">
                  Sets
                </span>
                <span className="text-sm text-[#d5d7dc]">
                  {ExerDetails.sets}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#242832] px-5 py-3">
                <span className="text-[11px] font-bold uppercase text-[#858b97]">
                  Reps
                </span>
                <span className="text-sm text-[#d5d7dc]">
                  {ExerDetails.reps}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#242832] px-5 py-3">
                <span className="text-[11px] font-bold uppercase text-[#858b97]">
                  Duration
                </span>
                <span className="text-sm text-[#d5d7dc]">
                  {ExerDetails.duration} min
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#242832] px-5 py-3">
                <span className="text-[11px] font-bold uppercase text-[#858b97]">
                  Calories
                </span>
                <span className="text-sm text-[#d5d7dc]">
                  {ExerDetails.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex items-center justify-between px-5 py-3">
                <span className="text-[11px] font-bold uppercase text-[#858b97]">
                  Rating
                </span>
                <span className="text-sm text-[#d5d7dc]">
                  {ExerDetails.rating}
                </span>
              </div>
            </div>
            {/* instruction */}
            <div className="flex flex-col gap-1 items-start justify-center">
              <h5 className="font-bold">INSTRUCTIONS</h5>
              {ExerDetails.instructions.map((instruction, index) => (
                <p
                  className="text-[#787b80] text-[12px]"
                  key={index}
                >{`${index + 1}.  ${instruction}`}</p>
              ))}
            </div>
            {/* button */}
            <div className="flex flex-col items-center lg:items-start lg:flex-row gap-3">
              <PlanButton ExerDetails={ExerDetails}></PlanButton>
              <SaveButton ExerDetails={ExerDetails}></SaveButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
