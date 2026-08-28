import "../css/recentActivity.css";

function RecentActivity({ complaints }) {

    return (

        <div className="activity-card">

            <h2>Recent Activity</h2>

            {

                complaints.slice(0,5).map((item)=>(

                    <div
                        className="activity-item"
                        key={item.id}
                    >

                        <div className="activity-dot"></div>

                        <div>

                            <h4>{item.title}</h4>

                            <p>{item.category}</p>

                        </div>

                        <span>{item.status}</span>

                    </div>

                ))

            }

        </div>

    );

}

export default RecentActivity;