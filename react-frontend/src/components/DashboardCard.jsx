
function DashboardCard({ title, value, icon, color }) {

    return (

        <div
            className="dashboard-card"
            style={{
                borderTop: `5px solid ${color}`
            }}
        >

            <div className="card-icon">

                {icon}

            </div>

            <div>

                <h2>{value}</h2>

                <p>{title}</p>

            </div>

        </div>

    );

}

export default DashboardCard;