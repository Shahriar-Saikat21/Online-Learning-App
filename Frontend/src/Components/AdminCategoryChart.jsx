import Chart from "react-apexcharts";
import { useState } from "react";

const AdminCategoryChart = () => {
  const [stat, setStat] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Computer",
          "Data",
          "Business",
          "EEE",
          "BBA",
          "Music",
          "React",
          "Express",
        ],
      },
    },
    series: [
      {
        name: "Total",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "This Month",
        data: [13, 14, 34, 25, 34, 16, 17, 19],
      },
    ],
  });
  return (
    <div>
      <h2 className="text-xl font-primary font-bold">Category Report</h2>
      <Chart
        options={stat.options}
        series={stat.series}
        type="bar"
        width="500"
      />
    </div>
  );
};

export default AdminCategoryChart;
