import { fetchWeatherData } from "@/app/lib/weather/route";
import Chart from "@/app/ui/weather/chart";
import Table from "../ui/weather/table";

const Page = async ({ searchParams }) => {
  try {
    const { latitude, longitude, start_date, end_date } = await searchParams;
    const weatherData = await fetchWeatherData(
      latitude || 52.52,
      longitude || 13.41,
      start_date || "2023-11-09",
      end_date || "2023-12-09"
    );

    return (
      <div className="flex flex-col items-center px-5 py-8">
        <h1 className="text-3xl font-semibold mb-3">Temperature Details</h1>
        <Chart weatherData={weatherData} />
        <Table weatherData={weatherData} />
      </div>
    );
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

export default Page;
