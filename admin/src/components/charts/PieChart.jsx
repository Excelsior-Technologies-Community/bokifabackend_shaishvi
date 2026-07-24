import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
} from "recharts";

const colours = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

const DashboardPieChart = ({ counts }) => {
  const data = [
    {
      name: "Users",
      value: counts.users,
    },
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
        <h1 className="text-xl font-semibold mb-4">Distribution </h1>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={true}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              isAnimationActive={true}
              animationDuration={500}
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colours[index % colours.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default DashboardPieChart;
