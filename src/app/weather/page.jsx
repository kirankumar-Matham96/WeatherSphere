import { fetchWeatherData } from "@/app/lib/weather/route";
import Chart from "@/app/ui/weather/chart";
import Table from "../ui/weather/table";

const Page = async ({ searchParams }) => {
  const { latitude, longitude, start_date, end_date } = await searchParams;

  const weatherData = await fetchWeatherData(
    latitude || 52.52,
    longitude || 13.41,
    start_date || "2024-12-09",
    end_date || "2024-12-23"
  );

  return (
    <div className="flex flex-col items-center p-2">
      <h1>Temperature Details</h1>
      <Chart weatherData={weatherData} />
      <Table weatherData={weatherData} />
    </div>
  );
};

export default Page;
