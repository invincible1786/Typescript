export function groupBy<T, K extends keyof T>(
  arr: T[],
  key: K
): Record<PropertyKey, T[]> {
  return arr.reduce((acc, item) => {
    const groupKey = item[key] as unknown as PropertyKey;
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {} as Record<PropertyKey, T[]>);
}