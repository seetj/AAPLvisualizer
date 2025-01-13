import {
  formatNumbers,
  incomeFilter,
  revenueFilter,
  yearFilter,
} from "./utilities";
import { useMemo } from "react";

export default function getTableData() {
  return useMemo(() => [
    {
      id: "date",
      Header: "Date",
      accessorKey: "date",
      filterFn: yearFilter,
    },
    {
      id: "revenue",
      Header: "Revenue",
      accessorKey: "revenue",
      cell: ({ getValue }) => formatNumbers(getValue()),
      filterFn: revenueFilter,
    },
    {
      id: "Net Income",
      Header: "Net Income",
      accessorKey: "netIncome",
      cell: ({ getValue }) => formatNumbers(getValue()),
      filterFn: incomeFilter,
    },
    {
      id: "Profit",
      Header: "Profit",
      accessorKey: "grossProfit",
      cell: ({ getValue }) => formatNumbers(getValue()),
    },
    {
      id: "eps",
      Header: "Earnings per Share(EPS)",
      accessorKey: "eps",
    },
    {
      id: "operatingincome",
      Header: "Operating Income",
      accessorKey: "operatingIncome",
      cell: ({ getValue }) => formatNumbers(getValue()),
    },
  ]);
}
