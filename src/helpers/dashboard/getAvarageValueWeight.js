import { months } from './common';
import { getDaysInMonth } from './getDaysInMonth';

export function getAvarageValueWeight(month, arr, changedWeight) {
  const date = new Date();
  const currentDay = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const daysInMonth = getDaysInMonth(currentYear, months.indexOf(month)+1);


  if (arr?.length === 0 && months.indexOf(month) === currentMonth) {
     return changedWeight;
  }
   
  if (arr?.length === 0) return 0;

  let newArr = [...arr];
  let totalScore = 0;
  let prevWeight = newArr[0];
  let values = [];
  let count = 0;
  let averageScore = 0;

  const arrDayFromBack = arr?.flatMap((item) => new Date(item.date).getDate());

  if (months.indexOf(month) === currentMonth) {
    for (let i = arrDayFromBack[0]; i <= currentDay; i++) {
      if (arrDayFromBack.includes(i)) {
        let item = newArr?.find((item) => new Date(item.date).getDate() === i);
        values.push(item?.value);
        prevWeight = item?.value;
        count += 1;
      } else {
        values.push(prevWeight);
        count += 1;
      }
    }
  }

  if (months.indexOf(month) !== currentMonth) {
    for (let i = arrDayFromBack[0]; i <= daysInMonth; i++) {
      if (arrDayFromBack.includes(i)) {
        let item = newArr?.find((item) => new Date(item.date).getDate() === i);
        values.push(item?.value);
        prevWeight = item?.value;
        count += 1;
      } else {
        values.push(prevWeight);
        count += 1;
      }
    }
  }

  if (arr[arr?.length - 1].value !== changedWeight) {
    values.pop();
  }

  totalScore = values?.reduce((total, item) => {
    return total + item;
  }, 0);

  if (arr[arr?.length - 1].value !== changedWeight) {
    totalScore = totalScore + changedWeight;
  }

  averageScore = totalScore / count;

  return Math.round(averageScore);
}
