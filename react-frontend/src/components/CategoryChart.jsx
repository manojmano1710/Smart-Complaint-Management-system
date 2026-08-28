import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

import "../css/categoryChart.css";

function CategoryChart({ complaints }) {

    const categories = {};

    complaints.forEach((item) => {

        categories[item.category] =
            (categories[item.category] || 0) + 1;

    });

    const data = Object.keys(categories).map((key) => ({

        category: key,
        count: categories[key]

    }));

    return (

        <div className="category-chart">

            <h2>Complaints by Category</h2>

            <ResponsiveContainer width="100%" height={350}>

                <BarChart data={data}>

                    <CartesianGrid strokeDasharray="3 3"/>

                    <XAxis dataKey="category"/>

                    <YAxis/>

                    <Tooltip/>

                    <Bar
                        dataKey="count"
                        fill="#3B82F6"
                        radius={[8,8,0,0]}
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}

export default CategoryChart;