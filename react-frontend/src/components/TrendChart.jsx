import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

import "../css/trendChart.css";

function TrendChart() {

    const data = [
        { month: "Jan", complaints: 12 },
        { month: "Feb", complaints: 18 },
        { month: "Mar", complaints: 25 },
        { month: "Apr", complaints: 20 },
        { month: "May", complaints: 35 },
        { month: "Jun", complaints: 30 },
        { month: "Jul", complaints: 42 }
    ];

    return (

        <div className="trend-chart">

            <h2>Monthly Complaint Trend</h2>

            <ResponsiveContainer width="100%" height={350}>

                <LineChart data={data}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="complaints"
                        stroke="#3B82F6"
                        strokeWidth={4}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}

export default TrendChart;