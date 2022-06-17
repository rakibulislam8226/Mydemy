import { Link } from "react-router-dom";
import Teacher_Sidebar from "./Teacher_Sidebar";

function Teacher_Dashboard() {
  return (
    <div className="container mt-3">
      <div className="row">
        <Teacher_Sidebar />
        <div className="col-md-9">
          <h4>Dashboard</h4>
        </div>
      </div>
    </div>
  );
}
export default Teacher_Dashboard;
