import React from "react";
import Point from "./Point";

const timeline = () => {
  const data = [
    {
      from: "2023-05-30T00:56:28+03:00",
      to: "2023-05-30T02:57:10+03:00",
    },
    {
      from: "2023-05-30T06:01:01+03:00",
      to: "2023-05-30T06:49:31+03:00",
    },
    {
      from: "2023-05-30T07:04:21+03:00",
      to: "2023-05-30T07:05:26+03:00",
    },
    {
      from: "2023-05-30T08:27:42+03:00",
      to: "2023-05-30T08:28:52+03:00",
    },
    {
      from: "2023-05-30T08:29:43+03:00",
      to: "2023-05-30T08:31:28+03:00",
    },
    {
      from: "2023-05-30T10:19:15+03:00",
      to: "2023-05-30T12:21:02+03:00",
    },
    {
      from: "2023-05-30T16:50:26+03:00",
      to: "2023-05-30T16:50:49+03:00",
    },
    {
      from: "2023-05-30T17:03:12+03:00",
      to: "2023-05-30T17:04:24+03:00",
    },
    {
      from: "2023-05-30T17:05:11+03:00",
      to: "2023-05-30T17:05:55+03:00",
    },
    {
      from: "2023-05-30T19:29:46+03:00",
      to: "2023-05-30T19:31:04+03:00",
    },
    {
      from: "2023-05-30T23:55:28+03:00",
      to: "2023-05-30T24:00:31+03:00",
    },
  ];

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
            <Point item={item} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default timeline;
