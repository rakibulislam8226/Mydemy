import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
function Recommend() {
  return (
    <div className="container mt-3">
      <div className="row">
        <Sidebar />
        <div className="col-md-9">
        <h3 className="card-header">Recommended Courses</h3>
          <div className="card">
            
            <div class="card-body">
              <div className="card">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Username</th>
                      <th scope="col">Created By</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <button className="btn btn-danger btn-sm">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Recommend;
