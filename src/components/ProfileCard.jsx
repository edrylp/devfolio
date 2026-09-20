import Socials from "../components/Socials.jsx"
import { PiMapPinLineLight } from "react-icons/pi";

const ProfileCard = () => {
  return (
    <div
      className="col-span-12 md:col-span-5 xl:col-span-3 mx-auto"
    >
      <div className="flex h-full flex-col items-center justify-center text-center animate-[fadeInUp_1s_ease]">
        <div
            className="halo mb-5 p-1 rounded-full hover:-translate-y-2.5 hover:scale-105 "
        >
          {/* For gap color*/}
          <div className="rounded-full size-62.5 bg-background p-0.5 transition-colors duration-300">
            <img
              src="/images/photo.webp"
              alt="Edryl Palinis"
              width={250}
              height={250}
              fetchpriority="high"
              className="aspect-square h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        <p className="mt-3 text-2xl sm:text-3xl font-extrabold font-jakarta text-text tracking-tight">
          Edryl Palinis
        </p>
        <p className="flex items-center gap-1 font-inconsolata text-xs sm:text-sm text-text tracking-wide">
          <PiMapPinLineLight className="text-md text-accent " />
          Bulacan, Philippines
        </p>

        <div className="w-24 h-px bg-linear-to-r from-transparent via-text/20 to-transparent my-4 sm:my-6"></div>

        <Socials />
        
      </div>
    </div>
  );
};

export default ProfileCard;
