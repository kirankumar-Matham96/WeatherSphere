import { fetchWeatherData } from "@/app/lib/weather/route";
import Chart from "@/app/ui/weather/chart";
import Table from "../ui/weather/table";

const Page = async () => {
  const searchParams = new URLSearchParams();

  const weatherData = await fetchWeatherData(
    52.52,
    13.41,
    "2024-12-09",
    "2024-12-23"
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
