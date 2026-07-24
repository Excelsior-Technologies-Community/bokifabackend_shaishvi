import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const DashboardBarChart = ({ counts }) => {
  const data = [
    { name: "Users", value: counts.users },
    {
      name: "Books",
      value: counts.books,
    },
    {
      name: "Categories",
      value: counts.categories,
    },
    {
      name: "Orders",
      value: counts.orders,
    },
  ];

  return (
    <>
      <div className="bg-white shadow rounded-lg p-5">
        <h2 className="text-xl mb-4 font-semibold">Overview</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data} barCategoryGap="50%" >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value"  barSize= {40} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
export default DashboardBarChart;
