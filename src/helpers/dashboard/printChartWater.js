import { months } from './common';
import { getDaysInMonth } from './getDaysInMonth';

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();

export function printChartWater(arr, month) {
  let days = [];
  let values = [];
  let zeroCalories = 0;
  const numberOfMonth = months.indexOf(month) + 1;
  const daysInMonth = getDaysInMonth(currentYear, numberOfMonth);
  const arrDayFromBack = arr?.flatMap((item) => new Date(item.date).getDate());
  for (let i = 0; i < daysInMonth; i++) {
    if (arr?.length > 0) {
      if (arrDayFromBack.includes(i + 1)) {
        let item = arr?.find((item) => new Date(item.date).getDate() === i + 1);
        values.push(item.value);
      } else {
        if (currentMonth === numberOfMonth && i + 1 > currentDay) {
          values.push(null);
        } else {
          values.push(zeroCalories);
        }
      }
      days.push(i + 1);
    } else if (currentMonth !== numberOfMonth) {
      days.push(i + 1);
    }
  }
  if (arr?.length === 0 && currentMonth === numberOfMonth) {
    for (let i = 0; i < currentDay; i++) {
      values.push(zeroCalories);
    }

    for (let i = 0; i < daysInMonth; i++) {
      days.push(i + 1);
    }
  }
  if (arr?.length === 0 && currentMonth !== numberOfMonth) {
    values = null;
  }
  const newArr = { values, days };
  return newArr;
}
