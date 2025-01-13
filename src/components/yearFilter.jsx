import { useState } from "react";

export default function YearFilterComponent({ table }) {
  const [yearMin, setYearMin] = useState("");
  const [yearMax, setYearMax] = useState(2024);

  const handleYearMinChange = (e) => {
    const value = e.target.value;
    setYearMin(value);
    table.setColumnFilters([
      {
        id: "date",
        value: [value, yearMax],
      },
    ]);
  };

  const handleYearMaxChange = (e) => {
    const value = e.target.value;
    setYearMax(value);
    table.setColumnFilters([
      {
        id: "date",
        value: [yearMin, value],
      },
    ]);
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="font-bold ">Year Range:</span>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <label htmlFor="yearMin" className="font-medium">
            Start Year:
          </label>
          <select
            id="yearMin"
            className="border-2 p-1 "
            value={yearMin}
            onChange={handleYearMinChange}
          >
            <option value={2020}>2020</option>
            <option value={2021}>2021</option>
            <option value={2022}>2022</option>
            <option value={2023}>2023</option>
            <option value={2024}>2024</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="yearMax" className="font-medium">
            End Year:
          </label>
          <select
            id="yearMax"
            className="border-2 p-1 "
            value={yearMax}
            onChange={handleYearMaxChange}
          >
            <option value={2020}>2020</option>
            <option value={2021}>2021</option>
            <option value={2022}>2022</option>
            <option value={2023}>2023</option>
            <option value={2024}>2024</option>
          </select>
        </div>
      </div>
    </div>
  );
}
