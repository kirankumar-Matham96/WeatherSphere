import axios from "axios";

const cache = {};

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

    // caching the data //TODO: Need to use some package here (preferably: axios-cache-adopter)
    const key = `${latitude}-${longitude}-${startDate}-${endDate}-`;

    if (cache[key]) {
      return cache[key];
    }

    // if new request
    const resp = await axios.get(
      "https://archive-api.open-meteo.com/v1/archive",
      { params }
    );
    const data = resp.data.daily.time.map((time, index) => {
      return {
        time,
        apparentTempMax: resp.data.daily.apparent_temperature_max[index],
        apparentTempMin: resp.data.daily.apparent_temperature_min[index],
        apparentTempMean: resp.data.daily.apparent_temperature_mean[index],
        temp2MMax: resp.data.daily.temperature_2m_max[index],
        temp2MMin: resp.data.daily.temperature_2m_min[index],
        temp2MMean: resp.data.daily.temperature_2m_mean[index],
      };
    });

    const units = resp.data.daily_units;

    const report = { data, units };
    cache[key] = report;

    return report;
  } catch (error) {
    console.error(error);
    if (error.response) {
      throw new Error(
        `Weather data could not be retrieved. Server responded with status: ${error.response.status}`
      );
    } else if (error.request) {
      throw new Error(
        `Weather data could not be retrieved. No response from server! Try again later.`
      );
    } else {
      throw new Error(
        `Weather data could not be retrieved. Something went wrong!`
      );
    }
  }
};
