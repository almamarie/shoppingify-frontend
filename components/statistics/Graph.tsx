import styles from "./Graph.module.css";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

export type ExpectedChartData = {
  January: number;
  February: number;
  March: number;
  April: number;
  May: number;
  June: number;
  July: number;
  August: number;
  September: number;
  October: number;
  November: number;
  December: number;
};

const Graph: React.FC<{ data: ExpectedChartData }> = (props) => {
  const data = {
    labels: Object.keys(props.data),
    datasets: [
      {
        label: "items",
        data: Object.values(props.data),
        backgroundColor: "#fff",
        borderColor: "#000",
        pointBorderColor: "#F9A109",
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
  };
  return (
    <div className={styles.wrapper}>
      <h3>Monthly Summary</h3>
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default Graph;
