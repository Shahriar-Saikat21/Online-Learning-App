import Chart from "react-apexcharts";
import { useState,useEffect } from "react";
import axios from "axios";

const AdminSaleChart = () => {

  const [category, setCategory] = useState([]);
  const [total, setTotal] = useState([]);
  const [thisMonth, setThisMonth] = useState([]);

  useEffect(() => {
    const c=[]
    const t = []
    const tm = []
    axios.get("http://localhost:3000/adminSales",{
      withCredentials: true,
    })
    .then((res) => {
      res.data.map(item=>{
        c.push(item.cat_name)
        t.push(item.TOTAL_SELL)
        tm.push(item.CURRENT_SELL)
      })
      setCategory(c)
      setTotal(t)
      setThisMonth(tm)
    }).catch((err) => {
      console.log(err)
    });
  }, []);
  
  return (
    <div>
      <h2 className="text-xl font-primary font-bold">Sale Report</h2>
      <Chart
        options={{
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: category
          }
        }} 
        series={[
          {
            name: "Total",
            data: total,
          },
          {
            name: "This Month",
            data: thisMonth,
          },
        ]}
        type="line"
        width="500"
      />
    </div>
  );
};

export default AdminSaleChart;
