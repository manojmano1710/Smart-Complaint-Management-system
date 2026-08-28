import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../css/layout.css";

function Layout({ children }) {

    return (

        <div className="layout">

            <Sidebar />

            <div className="content">

                <Navbar />

                <div className="page">

                    {children}

                </div>

            </div>

        </div>

    );

}

export default Layout;