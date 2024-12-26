"use client";

import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const Sidenav = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [latitude, setLatitude] = useState(52.52);
  const [longitude, setLongitude] = useState(13.41);
  const [startDate, setStartDate] = useState("2024-12-09");
  const [endDate, setEndDate] = useState("2024-12-23");

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);

    if (latitude && startDate && longitude && endDate) {
      params.set("latitude", latitude);
      params.set("longitude", longitude);
      params.set("start_date", startDate);
      params.set("end_date", endDate);
    } else {
      alert("The data is required");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="bg-gray-400 w-full h-full flex ">
      <form
        className="border-2 border-solid border-red-600 flex flex-col justify-start items-center w-full pt-32"
        onSubmit={handleSubmit}
      >
        <input
          className="rounded-md bg-gray-50 text-gray-800 outline-none p-2 my-2"
          type="text"
          required
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <input
          className="rounded-md bg-gray-50 text-gray-800 outline-none p-2 my-2"
          required
          type="text"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <input
          className="rounded-md bg-gray-50 text-gray-800 outline-none p-2 my-2"
          required
          type="text"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          className="rounded-md bg-gray-50 text-gray-800 outline-none p-2 my-2"
          required
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
