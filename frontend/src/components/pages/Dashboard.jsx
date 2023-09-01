import React, { Fragment } from 'react'
import { Hoc } from '../hoc/Hoc'
import '../../styles/pages/dashboard.scss'
import { Doughnut, Line, PolarArea } from 'react-chartjs-2';
import { Label } from 'reactstrap';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Filler,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Year 2023',
      data: [10, 2, 15, 24, 21, 12, 27],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Year 2022',
      data: [30, 23, 51, 23, 4, 5],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const dataTwo = {
  labels: [2017, 2018, 2019, 2020, 2021, 2022],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 20, 2, 9],
      backgroundColor: [
        'rgba(192, 69, 57, 0.5)',
        'rgba(159, 105, 168, 0.5)',
        'rgba(121, 171, 190, 0.5)',
        'rgba(206, 216, 113, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};


/* Chart Three Data */
export const optionsThree = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labelsThree = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const dataThree = {
  labelsThree,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: [12, 19, 3, 20, 2, 9],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
/* Chart Three Data */
const Dashboard = () => {
  return (
    <Fragment>
      <div className='dashboard p-2'>
        <div className='dashboard_chartTwo d-inline-block border border-2 border-black m-2 rounded-2'>
          <Label>Customer</Label>
          <PolarArea data={dataTwo} />
        </div>
        <div className='dashboard_chartOne d-inline-block border border-2 border-black m-2 rounded-2'>
          <Label>Sales Report Year</Label>
          <Line data={data} option={options} />
        </div>
        <div className='dashboard_chartOne d-inline-block border border-2 border-black m-2 rounded-2'>
          <Label>Sales Report Year</Label>
          <Line data={dataThree} option={optionsThree} />
        </div>

      </div>
    </Fragment>
  )
}

export default Hoc(Dashboard)