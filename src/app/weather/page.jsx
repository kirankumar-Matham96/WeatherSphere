import { fetchWeatherData } from "@/app/lib/weather/route";

import Chart from "@/app/ui/weather/chart";

const Page = async () => {
  const weatherData = await fetchWeatherData(52.52, 13.41, "2024-12-09", "2024-12-23");
  return (
    <div className="border-2">
      <h1>Main Content</h1>
      <Chart weatherData={weatherData} />
    </div>
  );
};

export default Page;
