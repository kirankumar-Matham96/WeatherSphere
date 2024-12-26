import WeatherPage from "@/app/weather/weatherPage";
import { Suspense } from "react";
import { ClipLoader } from "react-spinners";

const Page = () => (
  <Suspense
    fallback={
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#36d7b7" size={150} />
      </div>
    }
  >
    <WeatherPage />
  </Suspense>
);

export default Page;
