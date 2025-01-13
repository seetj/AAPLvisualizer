export const fetchAAPLData = async (apikey) => {
  try {
    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${apikey}`
    );
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
