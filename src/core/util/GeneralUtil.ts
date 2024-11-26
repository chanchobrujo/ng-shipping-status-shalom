export const formatDate = (date: Date) => {
  const now = new Date(date);
  const hour = now.getHours() + ':' + now.getMinutes();
  return now.getFullYear() + '-' + now.getMonth() + '-' + now.getDay() + ' ' + hour;
}
