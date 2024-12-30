import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onclick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => {
        return rating > i ? (
          <AiFillStar
            fontSize="15px"
            onClick={() => onclick(i)}
            key={i}
            style={style}
          />
        ) : (
          <AiOutlineStar
            fontSize="15px"
            onClick={() => onclick(i)}
            key={i}
            style={{ cursor: "pointer" }}
          />
        );
      })}
    </>
  );
};

export default Rating;
