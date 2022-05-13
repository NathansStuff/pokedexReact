export const getData = async <T,>(url: string): Promise<T> => {
  const response = await fetch(url);
  return await response.json();
};

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
