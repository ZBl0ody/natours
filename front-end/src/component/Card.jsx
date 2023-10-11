import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CiCalendar } from "react-icons/ci";
import { FiFlag } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const Card = ({
  name,
  duration,
  maxGroupSize,
  difficulty,
  ratingsAverage,
  ratingsQuantity,
  price,
  priceDiscount,
  summary,
  description,
  locations,
  startDates,
  createdAt,
  startLocation,
  imageCover,
}) => {
  const datePart = startDates[0].split("T")[0];

  return (
    <div className=" rounded-md bg-white shadow-lg w-[350px] h-[500px] text-secolor flex flex-col  justify-between  ">
      <div className="start relative">
        <div className="absolute top-0 w-full gradient opacity-50 h-full" />
        <img src={imageCover} alt={name} />
        <h1 className="absolute top-40 text-white opacity-70 text-2xl  right-3 gradient p-3 text-end bbr">
          {name}
        </h1>
      </div>
      <div className="bot flex-1 flex flex-col justify-between">
        <div className="mid p-5">
          <h3 className="text-sm font-medium">
            {difficulty}-{duration}
            -DAY TOUR
          </h3>
          <p className="text-sm font-extralight italic">{summary} </p>
          <div className=" flex justify-between mt-5">
            <div className="flex flex-col justify-start gap-4">
              <p className="flex items-center gap-2 text-maincolor ">
                <HiOutlineLocationMarker />
                <span className="text-secolor font-extralight">
                  {startLocation.description}
                </span>
              </p>
              <p className="flex items-center gap-2 text-maincolor">
                <FiFlag />
                <span className="text-secolor font-extralight">
                  {locations.length} stops
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-start  gap-4">
              <p className="flex items-center gap-2 text-maincolor">
                <CiCalendar />
                <span className="text-secolor font-extralight">{datePart}</span>
              </p>
              <p className="flex items-center gap-2 text-maincolor">
                <AiOutlineUser />
                <span className="text-secolor font-extralight">
                  {maxGroupSize}
                  people
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="end flex  justify-between items-center bg-backcolor p-5">
          <div>
            <h4>$ {priceDiscount} per person</h4>
            <h4 className="mt-[-5px] line-through text-gray-300">$ {price} </h4>

            <h4>
              {ratingsAverage} rating ({ratingsQuantity})
            </h4>
          </div>

          <Link
            to="/Details"
            className="border text-white bg-maincolor rounded-full px-8 py-2"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
