export function formatNumbers(num) {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(2) + "b";
  }
  return num.toString();
}

export function yearFilter(row, columnId, value) {
  const rowDate = row.getValue(columnId);
  const rowYear =
    typeof rowDate === "string" ? rowDate.slice(0, 4) : rowDate.getFullYear();
  const startYear = parseInt(value[0], 10);
  const endYear = parseInt(value[1], 10);

  return rowYear >= startYear && rowYear <= endYear;
}

export function revenueFilter(row, columnId, value) {
  const revenue = row.getValue(columnId);
  return revenue >= value[0] && revenue <= value[1];
}

export function incomeFilter(row, columnId, value) {
  const income = row.getValue(columnId);
  return income >= value[0] && revenue <= value[1];
}
