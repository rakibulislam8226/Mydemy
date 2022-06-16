import Sidebar from "./Sidebar";

function ProfileSetting() {
  return (
    <div className="container mt-3">
      <div className="row">
      <Sidebar />
        <div className="col-md-9">
          <div className="card">
            <h3 className="card-header">Profile Setting</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
              
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Username"
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>

                <div className="form-group mt-2">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="First name"
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Last name"
                  />
                </div>

                <button type="submit" className="btn btn-outline-primary mt-2">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileSetting;
