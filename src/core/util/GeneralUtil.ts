export const formatDate = (date: Date) => {
  const now = new Date(date);
  const hour = now.getHours() + ':' + now.getMinutes();
  const month = addZeroInTime(now.getMonth() + 1);
  return now.getFullYear() + '-' + month + '-' + addZeroInTime(now.getDate()) + ' ' + hour;
}

const addZeroInTime = (value: number) => {
  return (value > 9) ? value : "0".concat(String(value))
}
