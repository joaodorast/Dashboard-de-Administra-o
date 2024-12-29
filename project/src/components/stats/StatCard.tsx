import React from 'react';
import { LucideIcon } from 'lucide-react';
import styles from '../Dashboard.module.css';

interface StatCardProps {
  title: string;
  value: string;
  Icon: LucideIcon;
  iconColor: string;
}

export default function StatCard({ title, value, Icon, iconColor }: StatCardProps) {
  return (
    <div className={styles.statCard}>
      <div className="flex items-center justify-between">
        <div>
          <p className={styles.statTitle}>{title}</p>
          <p className={styles.statValue}>{value}</p>
        </div>
        <Icon className={`h-8 w-8 ${iconColor}`} />
      </div>
    </div>
  );
}