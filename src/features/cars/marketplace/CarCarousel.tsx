import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CarImage from "../../../assets/mercedes-e-class.jpg";
import CarDetails from "./CarDetails";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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

const SWIPER_CONFIG = {
  modules: [Navigation, Pagination, Scrollbar, A11y],
  slidesPerView: 1,
  slidesPerGroup: 1,
  speed: 1200,
  navigation: true,
  loop: true,
  breakpoints: {
    // 640px to 1023px
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    // 1024px+
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 15,
    },
  },
};

function CarCarousel() {
  return (
    <Swiper {...SWIPER_CONFIG} className="mt-16">
      {carData.map((car) => (
        <SwiperSlide key={car.name} className="mb-10">
          <div className="flex h-full w-full justify-center">
            <CarDetails car={car} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CarCarousel;
