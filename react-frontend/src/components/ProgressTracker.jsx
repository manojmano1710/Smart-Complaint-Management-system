function ProgressTracker({ status }) {

    let width = "25%";

    if(status==="Pending")
        width="25%";

    if(status==="In Progress")
        width="60%";

    if(status==="Resolved")
        width="100%";

    if(status==="Closed")
        width="100%";

    return(

        <div
            style={{
                width:"180px",
                height:"10px",
                background:"#30363d",
                borderRadius:"20px"
            }}
        >

            <div
                style={{
                    width:width,
                    height:"10px",
                    background:"#22C55E",
                    borderRadius:"20px"
                }}
            >

            </div>

        </div>

    );

}

export default ProgressTracker;