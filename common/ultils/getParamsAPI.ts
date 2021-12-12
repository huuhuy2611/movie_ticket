export const getParams = (params: any) => {
  if (!params || Object.keys(params)?.length === 0) return '';
  let result = '';
  Object.keys(params)?.forEach((param) => {
    if (param === 'Tag') {
      params[param]?.forEach((value: any) => {
        result += `&Tag=${value}`;
      });
      return;
    }
    result += `&${param}=${params[param]}`;
  });
  return `?${result.slice(1)}`;
};
