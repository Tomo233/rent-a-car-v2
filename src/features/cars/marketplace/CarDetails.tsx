import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BoltIcon from "@mui/icons-material/Bolt";
import TuneIcon from "@mui/icons-material/Tune";
import { Divider } from "@mui/material";
import CarSpec from "./CarSpec";

function CarDetails({ car }: { car: any }) {
  const { name, image, year, power, location, transmission, price } = car;

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl shadow-lg">
      {/* Image Container */}
      <div className="flex h-48 items-center justify-center bg-[#F2F5FA] p-4">
        <img src={image} alt={name} className="h-full object-contain" />
      </div>

      {/* Card Content */}
      <div className="flex flex-col gap-4 p-5">
        <h3 className="text-secondary-color text-lg font-bold tracking-wide">
          {name}
        </h3>

        {/* Key Specs */}
        <div className="flex items-center justify-between">
          <CarSpec icon={CalendarMonthIcon} text={year} />
          <CarSpec icon={BoltIcon} text={power} />
          <CarSpec icon={LocationOnIcon} text={location} />
        </div>

        <Divider />

        {/* Footer Action */}
        <div className="flex items-center justify-between pt-1">
          <CarSpec icon={TuneIcon} text={transmission} />

          <button className="bg-secondary-color cursor-pointer rounded-lg px-4 py-2 font-medium text-white transition-opacity hover:opacity-95">
            {price}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
