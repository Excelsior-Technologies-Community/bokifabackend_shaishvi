import React from "react";
import DashboardCard from "../components/DashboardCard";
import API from "../services/api";
import { useEffect } from "react";
import DashboardBarChart from "../components/charts/BarChart";
import DashboardPieChart from "../components/charts/PieChart";

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
  

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Total Books" count={counts.books} />
        <DashboardCard title="Categories" count={counts.categories} />
        <DashboardCard title="Users" count={counts.users} />
        <DashboardCard title="Orders" count={counts.orders} />
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <DashboardBarChart counts={counts} />
        <DashboardPieChart counts={counts} />
      </div>
    </>
  );
};

export default Dashboard;
