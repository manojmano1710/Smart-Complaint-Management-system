import "../css/statistics.css";

function Statistics({ complaints }) {

    const electricity = complaints.filter(
        c => c.category === "Electricity"
    ).length;

    const water = complaints.filter(
        c => c.category === "Water"
    ).length;

    const road = complaints.filter(
        c => c.category === "Road"
    ).length;

    const others = complaints.length - electricity - water - road;

    return (

        <div className="statistics">

            <div className="stat-box">

                <h3>⚡ Electricity</h3>

                <h1>{electricity}</h1>

            </div>

            <div className="stat-box">

                <h3>💧 Water</h3>

                <h1>{water}</h1>

            </div>

            <div className="stat-box">

                <h3>🛣 Road</h3>

                <h1>{road}</h1>

            </div>

            <div className="stat-box">

                <h3>📌 Others</h3>

                <h1>{others}</h1>

            </div>

        </div>

    );

}

export default Statistics;