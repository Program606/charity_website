export function formatYear(year: number) {
  if (year === 1) return "1st";
  if (year === 2) return "2nd";
  if (year === 3) return "3rd";
  return `${year}th`;
}
