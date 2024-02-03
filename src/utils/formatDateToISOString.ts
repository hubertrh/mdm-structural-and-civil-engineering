export default function formatDateToISOString(date: Date): string {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = `0${d.getMonth() + 1}`.slice(-2); // Zero-pad month
  const day = `0${d.getDate()}`.slice(-2); // Zero-pad day
  return `${year}-${month}-${day}`;
}
