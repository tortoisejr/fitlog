import Image from "next/image";
import Link from "next/link";
function Exercise({ eachExerData }) {
  return (
    <div className=" px-1">
      <Link href="#">
        <div className="card bg-base-100  shadow-sm w-87 lg:w-full hover:outline-2 hover:outline-blue-500">
          <figure>
            <div className=" h-45 lg:h-62.5 w-100 overflow-hidden">
              <Image
                src={eachExerData.image}
                alt="Exercise Picture"
                width={400}
                height={240}
                className="w-full"
              />
            </div>
          </figure>
          <div className="card-body p-3 lg:p-5 flex flex-col gap-2 items-start justify-center">
            <div className="space-x-2">
              {eachExerData.muscleGroups.map((muscle, index) => (
                <button
                  className="bg-[#c2f800] text-[#212a00] rounded-2xl px-1.5 font-bold "
                  key={index}
                >
                  {muscle}
                </button>
              ))}
            </div>
            <h3 className="text-white text-lg font-bold">
              {eachExerData.name}
            </h3>
            <p className="text-[#6b717a] text-[10px]">
              {eachExerData.equipment}
            </p>
            <hr className=" w-full border opacity-10" />
            <div className="flex flex-row justify-start items-center gap-5 text-[10px] text-[#9ca3af]">
              <p className="space-x-1">
                <i className="fa-regular fa-clock"></i>{" "}
                <span>{`${eachExerData.duration} min`}</span>
              </p>
              <p className="space-x-1">
                <i className="fa-solid fa-fire"></i>{" "}
                <span>{`${eachExerData.calorisBurned} Kcal`}</span>
              </p>
              <p className="space-x-1">
                <i className="fa-regular fa-star"></i>{" "}
                <span>{`${eachExerData.rating}`}</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Exercise;
