import { useState } from "react";

export default function NetIncomeFilterComponent({ table }) {
  const [incomeMin, setIncomeMin] = useState("");
  const [incomeMax, setIncomeMax] = useState("100000000000000");

  const handleMinChange = (e) => {
    const value = e.target.value;
    setIncomeMin(value);
    table.setColumnFilters([
      {
        id: "Net Income",
        value: [value, incomeMax],
      },
    ]);
  };

  const handleMaxChange = (e) => {
    const value = e.target.value;
    setIncomeMax(value);
    table.setColumnFilters([
      {
        id: "Net Income",
        value: [incomeMin, value],
      },
    ]);
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="font-bold ">Net Income Range:</span>

      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <label htmlFor="incomeMin" className="font-medium">
            Min:
          </label>
          <input
            id="incomeMin"
            className="border-2 p-1 "
            type="number"
            value={incomeMin}
            onChange={handleMinChange}
            placeholder="Min income"
          />
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor="incomeMax" className="font-medium">
            Max:
          </label>
          <input
            id="incomeMax"
            className="border-2 p-1 "
            type="number"
            value={incomeMax}
            onChange={handleMaxChange}
            placeholder="Max income"
          />
        </div>
      </div>
    </div>
  );
}
