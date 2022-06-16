import { Link } from "react-router-dom";
import Mycourses from "./Mycourses";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div className="container mt-3">
      <div className="row">
        <Sidebar />
        <div className="col-md-9">
          <h4>Dashboard</h4>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
