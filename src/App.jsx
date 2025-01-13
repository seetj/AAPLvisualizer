import { useMemo, useEffect, useState } from "react";
import Table from "./components/table";
import Header from "./components/header";
import StockHeader from "./componenets/stockHeader";
import {
  formatNumbers,
  incomeFilter,
  revenueFilter,
  yearFilter,
} from "./components/utilities";
function App() {
  const [data, setData] = useState(null);
  const apikey = import.meta.env.VITE_FINANCIAL_API_KEY;
  const fetchData = async () => {
    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${apikey}`
    );
    const applData = await response.json();
    setData(applData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const tabledata = useMemo(() => [
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

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <StockHeader />
      <div className="px-10">
        <Table columns={tabledata} data={data} />
      </div>
    </>
  );
}
export default App;
