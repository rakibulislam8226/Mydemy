function Teacher_Login() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <h3 className="card-header">Teacher Login</h3>
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

                <div className="form-group mt-4">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="*****"
                  />
                </div>

                <button type="submit" className="btn btn-primary mt-2">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Teacher_Login;
