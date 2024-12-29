import React from 'react';
import styles from '../Dashboard.module.css';

const recentOrders = [
  { id: 1, customer: 'João Silva', product: 'Produto A', value: 'R$ 299,00', status: 'Completo' },
  { id: 2, customer: 'Maria Santos', product: 'Produto B', value: 'R$ 199,00', status: 'Pendente' },
  { id: 3, customer: 'Pedro Costa', product: 'Produto C', value: 'R$ 499,00', status: 'Processando' },
];

export default function RecentOrders() {
  return (
    <div className={styles.table}>
      <h2 className="text-lg font-semibold p-6">Pedidos Recentes</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className={styles.tableHeader}>Cliente</th>
            <th className={styles.tableHeader}>Produto</th>
            <th className={styles.tableHeader}>Valor</th>
            <th className={styles.tableHeader}>Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {recentOrders.map((order) => (
            <tr key={order.id}>
              <td className={styles.tableCell}>{order.customer}</td>
              <td className={styles.tableCell}>{order.product}</td>
              <td className={styles.tableCell}>{order.value}</td>
              <td className={styles.tableCell}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}