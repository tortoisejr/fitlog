import Exercise from "@/components/home/Exercise";

async function fetchData() {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await response.json();
  return data;
}
async function Exercises() {
  const allExerData = await fetchData();
  return (
    <div className="container mx-auto">
      <h2 className="text-white font-bold text-2xl text-start">THE LIBRARY</h2>
      <p className="text-[#6b7179] text-[12px] text-start">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {allExerData.map((exercise) => (
            <Exercise eachExerData={exercise} key={exercise.id}></Exercise>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Exercises;
