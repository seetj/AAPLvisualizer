import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { yearFilter, revenueFilter, incomeFilter } from "./utilities";
import YearFilterComponent from "./yearFilter";
import RevenueFilterComponent from "./revenueFilter";
import IncomeFilterComponent from "./incomeFilter";

export default function Table({ columns, data }) {
  const aaplTable = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),

    filterFn: {
      year: yearFilter,
      revenue: revenueFilter,
      income: incomeFilter,
    },
  });
  return (
    <>
      <div className="filterContainer justify-between flex  items-center px-6 py-2">
        <div className="yearFilter ">
          <YearFilterComponent table={aaplTable} />
        </div>
        <div className="revenueFilter ">
          <RevenueFilterComponent table={aaplTable} />
        </div>
        <div className="incomeFilter ">
          <IncomeFilterComponent table={aaplTable} />
        </div>
      </div>
      <table className="border-4 border-slate-500 w-full">
        <thead>
          {aaplTable.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-2 border-indigo-500">
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    className="border-2 border-slate-500 text-center px-4 py-2"
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.column.columnDef.Header}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {aaplTable.getRowModel().rows.map((row) => (
            <tr className="border-2 border-slate-500 " key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  className="border-2 border-slate-500 text-center px-4 py-2"
                  key={cell.id}
                >
                  {cell.column.columnDef.cell
                    ? cell.column.columnDef.cell(cell)
                    : cell.renderValue()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
