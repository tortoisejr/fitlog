import Image from "next/image";
import footerlogo from "../../assets/footer.svg";
function Footer() {
  return (
    <div className="bg-black mt-3 lg:mt-20 py-5 lg:py-0">
      <hr className="opacity-20" />
      <div className="container mx-auto flex flex-col  lg:flex-row justify-between items-center h-10 lg:h-20">
        <div className="flex flex-row gap-2 justify-start items-center">
          <Image src={footerlogo} alt="logo Image"></Image>
          <p className="text-white  font-bold">FITLOG</p>
        </div>
        <p className="text-[#555b66] text-[12px]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </div>
  );
}

export default Footer;
