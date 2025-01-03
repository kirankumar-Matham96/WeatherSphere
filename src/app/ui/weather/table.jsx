import Pagination from "./pagination";

const Table = ({ weatherData }) => {
  const { data, units } = weatherData;

  return (
    <>
      <table className="border-2 border-gray-600 border-solid w-[95%]">
        <thead>
          <tr className="border-2 border-gray-600 border-solid">
            <th className="border-2 border-gray-600 border-solid">Date</th>
            <th className="border-2 border-gray-600 border-solid">
              Max Temperature ({units?.temperature_2m_max})
            </th>
            <th className="border-2 border-gray-600 border-solid">
              Min Temperature ({units?.temperature_2m_min})
            </th>
            <th className="border-2 border-gray-600 border-solid">
              Mean Temperature ({units?.temperature_2m_mean})
            </th>
            <th className="border-2 border-gray-600 border-solid">
              Max Apparent Temperature ({units?.apparent_temperature_max})
            </th>
            <th className="border-2 border-gray-600 border-solid">
              Min Apparent Temperature ({units?.apparent_temperature_min})
            </th>
            <th className="border-2 border-gray-600 border-solid">
              Mean Apparent Temperature ({units?.apparent_temperature_mean})
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((data) => (
            <tr
              className="text-center border-2 border-gray-500 border-solid"
              key={data?.time}
            >
              <td className="border-2 border-gray-500 border-solid">
                {data?.time}
              </td>
              <td className="border-2 border-gray-500 border-solid">
                {data?.temp2MMax}
              </td>
              <td className="border-2 border-gray-500 border-solid">
                {data?.temp2MMin}
              </td>
              <td className="border-2 border-gray-500 border-solid">
                {data?.temp2MMean}
              </td>
              <td className="border-2 border-gray-500 border-solid">
                {data?.apparentTempMax}
              </td>
              <td className="border-2 border-gray-500 border-solid">
                {data?.apparentTempMin}
              </td>
              <td className="border-2 border-gray-500 border-solid">
                {data?.apparentTempMean}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          <div className="mt-8">

      <Pagination />
          </div>
    </>
  );
};

export default Table;
