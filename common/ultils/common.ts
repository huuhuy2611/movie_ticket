export const convertUIRunningTime = (time: string): string => {
  if (!time) return '';
  const arr = time.split(':');
  return `${arr[0]} giờ ${arr[1]} phút`;
};
