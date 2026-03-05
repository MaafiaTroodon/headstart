export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(value);

export const isPrimeTime = (date: string, time: string) => {
  const d = new Date(date);
  const day = d.getDay();
  const hour = Number(time.split(':')[0]);
  if (day === 0 || day === 6) return true;
  return hour >= 17 && hour < 22;
};

export const uid = (prefix = 'id') => `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
