import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { theme } from '../../../GlobalStyle';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  rotation: 0,
  cutout: '80%',
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  animation: {
    animateRotate: true,
    animateScale: true,
  },
};

const bgCircle = {
  id: 'bgCircle',
  beforeDatasetsDraw(chart) {
    const { ctx } = chart;

    ctx.save();

    const xCoor = chart.getDatasetMeta(0).data[0].x;
    const yCoor = chart.getDatasetMeta(0).data[0].y;
    const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
    const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
    const width = outerRadius - innerRadius;
    const angle = Math.PI / 180;

    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = `${theme.palette.greyone.main}`;
    ctx.arc(xCoor, yCoor, outerRadius - width / 2, 0, angle * 360, false);
    ctx.stroke();
  },
};

export const DoughnutChart = ({ dailyGoal, filledValue, bgColor }) => {
  let emptyValue = dailyGoal - filledValue;
  if (filledValue > dailyGoal) {
    emptyValue = 0;
  }

  const data = {
    datasets: [
      {
        label: [],
        data: [filledValue, emptyValue],
        backgroundColor: [bgColor, 'transparent'],
        borderColor: ['transparent'],
        borderWidth: 0,
        borderRadius: 20,
      },
    ],
  };
  return (
    <>
      <Doughnut options={options} data={data} plugins={[bgCircle]} />
    </>
  );
};
