import React, { useState } from "react";

const Point = ({ item }) => {
  const getSecondsSinceMidnight = (time) => {
    return time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds();
  };

  const from = getSecondsSinceMidnight(new Date(item.from));
  const to = getSecondsSinceMidnight(new Date(item.to));
  const start = (from / 86400) * 100;
  const end = (to / 86400) * 100;
  const width = end - start;

  return (
    <div
      className={`
      min-w-[1.75rem]
      w-7
      h-7
      rounded-full
      shadow
      absolute
    bg-point-green
      top-[50%]
   `}
      style={{
        left: `${start}%`,
        transform: `translateX(-${start}%) translateY(-50%)`,
        width: `${width}%`,
      }}
    ></div>
  );
};

export default Point;
