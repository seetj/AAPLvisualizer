import { useEffect, useState } from "react";
import Table from "./components/table";
import Header from "./components/header";
import StockHeader from "./components/stockheader";
import getTableData from "./components/tabledata";
import { fetchAAPLData } from "./components/data";
function App() {
  const [data, setData] = useState(null);
  const apikey = import.meta.env.VITE_FINANCIAL_API_KEY;
  const tabledata = getTableData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const applData = await fetchAAPLData(apikey);
        setData(applData);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    fetchData();
  }, []);

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
