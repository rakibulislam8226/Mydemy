import { Link } from "react-router-dom";
function Teacher_Sidebar() {
  return (
    <div className="col-md-3">
      <h3 className="card-header">Teacher Dashboard</h3>
      <div className="card">
        <ul className="list-group list-group-flush">
          <Link to="/teacher_dashboard" className="list-group-item btn-outline-dark">
            Dashboard
          </Link>
          <Link to="/teacher_courses" className="list-group-item btn btn-outline-success">
          Teacher Courses
          </Link>
          <Link to="/teacher_ProfileSetting" className="list-group-item btn btn-outline-info">
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

export default Teacher_Sidebar;
