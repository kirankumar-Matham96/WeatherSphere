"use client";

import { useState } from "react";

const Sidenav = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // change URL params
  };

  return (
    <div className="bg-gray-400 w-full h-full flex ">
      <form
        className="border-2 border-solid border-red-600 flex flex-col justify-start items-center w-full pt-32"
        onSubmit={handleSubmit}
      >
        <input
          className="rounded-sm bg-gray-50 text-gray-800 outline-none p-2 my-2"
          type="text"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <input
          className="rounded-sm bg-gray-50 text-gray-800 outline-none p-2 my-2"
          type="text"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <input
          className="rounded-sm bg-gray-50 text-gray-800 outline-none p-2 my-2"
          type="text"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          className="rounded-sm bg-gray-50 text-gray-800 outline-none p-2 my-2"
          type="text"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button type="submit">Get Data</button>
      </form>
    </div>
  );
};
export default Sidenav;
