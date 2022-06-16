function Register() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <h3 className="card-header">User Registration</h3>
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
                

                <div className="form-group mt-2">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="*****"
                  />
                </div>

                <button type="submit" className="btn btn-primary mt-2">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
