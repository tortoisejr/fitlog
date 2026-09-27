import Image from "next/image";
import bannerImg from "../../assets/banner.png";
function Banner() {
  return (
    <div className="container mx-auto my-10 lg:my-20 rounded-lg bg-[#15171d] px-6 py-10 md:px-12 lg:px-20">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col items-center justify-center lg:items-start gap-5">
          <h2 className=" font-bold text-[#b8ec01]">WORKOUT LIBRARY</h2>

          <h3 className="text-3xl font-bold text-white md:text-4xl text-center lg:text-start lg:text-5xl">
            TRAIN WITH INTENT.LOG
            <br /> EVERY SET.
          </h3>

          <p className="text-sm text-[#646972] text-center lg:text-start ">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br className="hidden lg:block" />
            into today's plan, and watch the week's work add up.
          </p>

          <button className="rounded-lg bg-[#c2f800] px-3 py-1.5 text-[12px] font-bold text-black">
            BROWES WORKOUTS
          </button>
        </div>

        <Image src={bannerImg} alt="Banner Image" className="hidden lg:block" />
      </div>
    </div>
  );
}

export default Banner;
