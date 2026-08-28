import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

function ComplaintChart({ complaints }) {

    const pending = complaints.filter(
        c => c.status === "Pending"
    ).length;

    const resolved = complaints.filter(
        c => c.status === "Resolved"
    ).length;

    const progress = complaints.filter(
        c => c.status === "In Progress"
    ).length;

    const data = [

        {
            name: "Pending",
            value: pending
        },

        {
            name: "Resolved",
            value: resolved
        },

        {
            name: "In Progress",
            value: progress
        }

    ];

    const COLORS = [

        "#F59E0B",
        "#22C55E",
        "#3B82F6"

    ];

    return (

        <div className="chart-container">

            <h2>Complaint Analytics</h2>

            <ResponsiveContainer
                width="100%"
                height={350}
            >

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={120}
                        label
                    >

                        {

                            data.map((entry, index) => (

                                <Cell
                                    key={index}
                                    fill={COLORS[index]}
                                />

                            ))

                        }

                    </Pie>

                    <Tooltip />

                    <Legend />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}

export default ComplaintChart;