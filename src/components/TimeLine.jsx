import React from "react";
import Point from "./Point";

const timeline = ({ data }) => {
  const date = new Date("2023-05-30T05:56:28+03:00");
  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  const parts = formatter.formatToParts(date);
  const formattedDate = `${parts[0].value} ${parts[4].value} ${parts[2].value}`;

  return (
    <div className="w-full max-w-xl flex flex-col gap-4 px-4">
      <div className="flex justify-between">
        <div>{formattedDate}</div>
        <div className="">
          {data.length} {data.length === 1 ? "visit" : "visits"}
        </div>
      </div>
      <div>
        <div className="bg-bg-green w-full h-8 rounded-full relative">
          {data.map((item, index) => (
            <Point item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default timeline;
