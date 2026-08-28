function StatusBadge({ status }) {

    let color = "";

    switch (status) {

        case "Pending":
            color = "#F59E0B";
            break;

        case "In Progress":
            color = "#3B82F6";
            break;

        case "Resolved":
            color = "#22C55E";
            break;

        case "Closed":
            color = "#6B7280";
            break;

        default:
            color = "#EF4444";
    }

    return (

        <span
            style={{
                background: color,
                color: "white",
                padding: "6px 15px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "600"
            }}
        >
            {status}
        </span>

    );

}

export default StatusBadge;