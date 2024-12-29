import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from '../Dashboard.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Vendas 2024',
      data: [3000, 3500, 4200, 4800, 5100, 5800],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

export default function SalesChart() {
  return (
    <div className={styles.chartCard}>
      <h2 className="text-lg font-semibold mb-4">Vendas Mensais</h2>
      <Line data={salesData} options={{ responsive: true }} />
    </div>
  );
}