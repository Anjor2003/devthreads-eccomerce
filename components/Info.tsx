import { BiWorld } from "react-icons/bi";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { GiTrophy } from "react-icons/gi";

const Info = () => {
  return (
    <section className="mt-2 py-5 pr-4">
      <div className="main-container grid grid-cols-2 sm:grid-cols-2 gap-x-20 gap-y-10 md:grid-cols-4">
        <div className="flex items-center gap-2 uppercase text-sm">
          <BiWorld className="text-3xl" />
          <span>Free Shipping Worldwide</span>
        </div>
        <div className="flex items-center gap-2 uppercase text-sm">
          <FaArrowRotateLeft className="text-3xl" />
          <span>Money back Guarranteed</span>
        </div>
        <div className="flex items-center gap-2 uppercase text-sm">
          <IoIosLock className="text-3xl" />
          <span>Secure Online Payments</span>
        </div>
        <div className="flex items-center gap-2 uppercase text-sm">
          <GiTrophy className="text-3xl" />
          <span>best Premium Quality</span>
        </div>
      </div>
    </section>
  );
};

export default Info;
