import styles from "./Graph.module.css";
// import { Line } from "react-chartjs-2";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
// } from "chart.js";

// ChartJS.register(
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip
// );

export type ExpectedChartData = {}[];

const Graph: React.FC<{ data: ExpectedChartData }> = (props) => {
  //   const data = {
  //     labels: Object.keys(props.data),
  //     datasets: [
  //       {
  //         label: "items",
  //         data: Object.values(props.data),
  //         backgroundColor: "#fff",
  //         borderColor: "#000",
  //         pointBorderColor: "#F9A109",
  //         tension: 0.4,
  //         color: "#F9A109",
  //       },
  //     ],
  //   };

  //   const options = {
  //     plugins: {
  //       legend: true,
  //     },
  //   };
  //   return (
  //     <div className={styles.wrapper}>
  //       <h3>Monthly Summary</h3>
  //       <Line data={data} options={options}></Line>
  //     </div>
  //   );

  const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
  return (
    <div className={styles.wrapper}>
      <h3>Monthly Summary</h3>
      <LineChart width={700} height={300} data={props.data}>
        <Line type="monotone" dataKey="value" stroke="#F9A109" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Graph;
