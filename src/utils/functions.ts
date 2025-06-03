import DistributionItem from "../model/DistributionItem";
import _ from 'lodash'

export function getDistributionItems(numbers: number[], interval: number): DistributionItem[] {
      const grouped = _.groupBy(numbers, n => Math.floor(n / interval));
  return Object.entries(grouped).map(([key, group]) => {
    const min = Number(key) * interval;
    const max = min + interval - 1;
    return { min, max, amount: group.length, label: `${min}` };
})
}
export function getDateFromAge(age: number): string {
  const currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() - age);
  currentDate.setDate(1);
  currentDate.setMonth(0);
  return currentDate.toISOString().substring(0, 10);
}