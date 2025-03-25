import React from 'react';
import styles from './Dashboard.module.css';
import StatsGrid from './stats/StatsGrid';
import SalesChart from './charts/SalesChart';
import VisitsChart from './charts/VisitsChart';
import RecentOrders from './orders/RecentOrders';

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
      </header>

      <StatsGrid />

      <div className={styles.charts}>
        <SalesChart />
        <VisitsChart />
      </div>

      <RecentOrders />
    </div>
  );
}
