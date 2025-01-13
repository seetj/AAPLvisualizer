import { useState } from "react";

export default function RevenueFilterComponent({ table }) {
  const [revenueMin, setRevenueMin] = useState("");
  const [revenueMax, setRevenueMax] = useState("100000000000000");

  const handleRevenueMinChange = (e) => {
    const value = e.target.value;
    setRevenueMin(value);
    table.setColumnFilters([
      {
        id: "revenue",
        value: [value, revenueMax],
      },
    ]);
  };

  const handleRevenueMaxChange = (e) => {
    const value = e.target.value;
    setRevenueMax(value);
    table.setColumnFilters([
      {
        id: "revenue",
        value: [revenueMin, value],
      },
    ]);
  };

  return (
    <div className="flex items-center space-x-2  ">
      <span className="font-bold ">Revenue Range:</span>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <label htmlFor="revenueMin" className="font-medium">
            Min:
          </label>
          <input
            id="revenueMin"
            className="border-2 p-1"
            type="number"
            value={revenueMin}
            onChange={handleRevenueMinChange}
            placeholder="Min revenue"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="revenueMax" className="font-medium">
            Max:
          </label>
          <input
            id="revenueMax"
            className="border-2 p-1 "
            type="number"
            value={revenueMax}
            onChange={handleRevenueMaxChange}
            placeholder="Max revenue"
          />
        </div>
      </div>
    </div>
  );
}
