/**
 *
 *
 *
 *
 *
 *
 *
 * first
 */

"use client";

import { fetchWeatherData } from "@/app/lib/weather/route";
import Chart from "@/app/ui/weather/chart";
import Table from "../ui/weather/table";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const WeatherPage = () => {
  try {
    const searchParams = useSearchParams();

    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const data = await fetchWeatherData(
            searchParams.get("latitude") || 52.52,
            searchParams.get("longitude") || 13.41,
            searchParams.get("start_date") || "2023-11-09",
            searchParams.get("end_date") || "2023-12-09"
          );
          setWeatherData(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, [searchParams]);

    if (loading) {
      return (
        <div className="flex flex-col items-center px-5 py-8 h-screen">
          <h1 className="text-3xl font-semibold mb-3">Temperature Details</h1>
          <div className="mb-5 h-1/2 w-full border-2 border-gray-500 flex justify-center items-center">
            <ClipLoader
              color="#ffffff"
              loading={loading}
              size={150}
              width={120}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
          <div className="mb-5 h-1/2 w-full border-2 border-gray-500 flex justify-center items-center">
            <ClipLoader
              color="#ffffff"
              loading={loading}
              size={150}
              width={120}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex flex-col items-center px-5 py-8 h-screen">
          <h1 className="text-3xl font-semibold mb-3">Temperature Details</h1>
          <h2 className="text-2xl font-semibold mb-5">Error: {error}</h2>
        </div>
      );
    }

    if (weatherData) {
      return (
        <div className="flex flex-col items-center px-5 py-8">
          <h1 className="text-3xl font-semibold mb-3">Temperature Details</h1>
          <Chart weatherData={weatherData} />
          <Table weatherData={weatherData} />
        </div>
      );
    }
  } catch (error) {
    return (
      <div className="flex flex-col items-center px-5 py-8">
        <h1 className="text-3xl font-semibold mb-3">Temperature Details</h1>
        <div className="text-xl font-semibold">
          <p>{error.message}</p>
        </div>
      </div>
    );
  }
};

export default WeatherPage;
