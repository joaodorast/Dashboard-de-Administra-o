import React from 'react';
import { Activity, Users, DollarSign, ShoppingCart } from 'lucide-react';
import StatCard from './StatCard';
import styles from '../Dashboard.module.css';

export default function StatsGrid() {
  return (
    <div className={styles.stats}>
      <StatCard
        title="Vendas Totais"
        value="R$ 54.350"
        Icon={DollarSign}
        iconColor="text-green-500"
      />
      <StatCard
        title="Usuários Ativos"
        value="2,450"
        Icon={Users}
        iconColor="text-blue-500"
      />
      <StatCard
        title="Pedidos Novos"
        value="128"
        Icon={ShoppingCart}
        iconColor="text-purple-500"
      />
      <StatCard
        title="Taxa de Conversão"
        value="3.2%"
        Icon={Activity}
        iconColor="text-orange-500"
      />
    </div>
  );
}