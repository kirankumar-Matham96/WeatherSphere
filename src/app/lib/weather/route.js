import axios from "axios";

export const fetchWeatherData = async (
  latitude,
  longitude,
  startDate,
  endDate
) => {
  try {
    const params = {
      latitude: latitude,
      longitude: longitude,
      start_date: startDate,
      end_date: endDate,
      daily:
        "temperature_2m_max,temperature_2m_min,temperature_2m_mean,apparent_temperature_max,apparent_temperature_min,apparent_temperature_mean",
      timezone: "auto",
    };

    const resp = await axios.get(
      "https://archive-api.open-meteo.com/v1/archive",
      { params }
    );
    console.log("🚀 ~ resp.data:", resp.data);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
