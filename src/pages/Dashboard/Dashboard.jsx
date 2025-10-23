import React from "react";
import StatCard from "../../components/DashboardCards/StatCard";

const Dashboard = () => {
  const stats = [
    { title: "Ventas", value: "$5,230" },
    { title: "Pedidos", value: "148" },
    { title: "Productos", value: "73" },
    { title: "Admins", value: "3" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s, i) => (
        <StatCard key={i} title={s.title} value={s.value} />
      ))}
    </div>
  );
};

export default Dashboard;
