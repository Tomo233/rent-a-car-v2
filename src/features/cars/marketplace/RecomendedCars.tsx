import CarImage from "../../../assets/mercedes-e-class.jpg";
import BlueSpan from "../../../components/ui/BlueSpan";
import SectionDivider from "../../../components/ui/SectionDivider";
import CarDetails from "./CarDetails";

const carData = [
  {
    name: "Mercedes Benz E Class",
    image: CarImage,
    year: "2020 god.",
    power: "200KW",
    location: "Beograd",
    transmission: "Automatic",
    price: "50$/Dan",
  },
  {
    name: "Mercedes Benz E Class",
    image: CarImage,
    year: "2020 god.",
    power: "200KW",
    location: "Beograd",
    transmission: "Automatic",
    price: "50$/Dan",
  },
  {
    name: "Mercedes Benz E Class",
    image: CarImage,
    year: "2020 god.",
    power: "200KW",
    location: "Beograd",
    transmission: "Automatic",
    price: "50$/Dan",
  },
];

function RecomendedCars() {
  return (
    <div className="mt-10">
      <SectionDivider>
        <BlueSpan>Recomended</BlueSpan> Cars
      </SectionDivider>
      <div className="my-32 flex items-center justify-center gap-10">
        {carData.map((car) => (
          <CarDetails car={car} key={car.name} />
        ))}
      </div>
    </div>
  );
}

export default RecomendedCars;
