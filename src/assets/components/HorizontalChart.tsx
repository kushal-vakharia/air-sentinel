import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export default function HorizontalChart() {
  const data = {
    labels: [
      "Phantom 4",
      "Mini 4K EF:0",
      "Phantom 4 Pro",
      "Mini 2",
      "Mini 3 Pro",
      "Phantom 4 RTK",
      "Inspire 2",
      "Mavic 3",
      "Mavic Pro",
      "Air 25",
    ],
    datasets: [
      {
        label: "Count",
        data: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3],
        backgroundColor: "#f06c6c",
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    plugins: { legend: { display: false } },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: 220 }}>
      <Bar data={data} options={options} />
    </div>
  );
}
