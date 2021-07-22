import { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { Car } from "../../components/car";
import { testCar1, testCar2 } from "../../data-mock/cars";
import { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import { SCREENS } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;

export default function TopCars() {
  const [current, setCurrent] = useState(0);

  const cars = [
    <Car {...testCar1} />,
    <Car {...testCar1} />,
    <Car {...testCar2} />,
    <Car {...testCar1} />,
    <Car {...testCar1} />,
    <Car {...testCar2} />,
  ];

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={cars}
          plugins={[
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            920: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots
          value={current}
          onChange={setCurrent}
          number={numberOfDots}
        />
      </CarsContainer>
    </TopCarsContainer>
  );
}
