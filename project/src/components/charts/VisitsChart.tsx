import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from '../Dashboard.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const visitsData = {
  labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
  datasets: [
    {
      label: 'Visitas',
      data: [1200, 1900, 1500, 1800, 2200, 1600, 1400],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    },
  ],
};

export default function VisitsChart() {
  return (
    <div className={styles.chartCard}>
      <h2 className="text-lg font-semibold mb-4">Visitas por Dia</h2>
      <Bar data={visitsData} options={{ responsive: true }} />
    </div>
  );
}