export default function StockHeader() {
  return (
    <div className="flex flex-wrap items-center bg-slate-500 p-4 w-full">
      <img
        className="w-16 h-16 md:w-[70px] md:h-[70px] object-contain"
        src="https://images.financialmodelingprep.com/symbol/AAPL.png"
        alt="Stock Logo"
      />
      <span className="text-white text-sm md:text-lg ml-4">
        Apple Inc. Annual Financial Statements
      </span>
    </div>
  );
}
