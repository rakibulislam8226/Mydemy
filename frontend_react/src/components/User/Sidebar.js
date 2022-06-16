import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="col-md-3">
      <h3 className="card-header">User Dashboard</h3>
      <div className="card">
        <ul className="list-group list-group-flush">
          <Link to="/dashboard" className="list-group-item btn-outline-dark">
            Dashboard
          </Link>
          <Link to="/mycourses" className="list-group-item btn btn-outline-success">
            My Courses
          </Link>
          <Link to="/recommend" className="list-group-item btn btn-outline-secondary">
            Recommended 
          </Link>
          <Link to="/ProfileSetting" className="list-group-item btn btn-outline-info">
            Profile Setting
          </Link>
          <Link to="#" className="list-group-item">
            Change Password
          </Link>
          <Link to="#" className="list-group-item btn-outline-danger">
            Logout
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
