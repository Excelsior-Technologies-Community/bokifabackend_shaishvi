import React from "react";
import DashboardCard from "../components/DashboardCard";
import API from "../services/api";
import { useEffect } from "react";


const Dashboard = () => {
  const [counts, setCounts] = React.useState({
    users: 0,
    books: 0,
    categories: 0,
    orders: 0,
  });
  useEffect(() => {
    const getCounts = async () => {
      try {
        const res = await API.get("/dashboard");
        console.log(res.data);
        setCounts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCounts();
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Total Books" count={counts.books} />
        <DashboardCard title="Categories" count={counts.categories} />
        <DashboardCard title="Users" count={counts.users} />
        <DashboardCard title="Orders" count={counts.orders} />
      </div>
    </>
  );
};

export default Dashboard;
