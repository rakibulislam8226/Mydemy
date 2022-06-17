import { Link } from "react-router-dom";
function TeacherDetail() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4">
          <img src="/logo512.png" class="img-thumbnail w-75" alt="Teacher Image" />
        </div>
        <div className="col-md-8 ">
          <h4>Teacher Name</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p className="fw-bold"> Skills: <Link to="/category-courses/python">Python</Link>,<Link to="/category-courses/php">PHP</Link></p>
          <p className="fw-bold"> Recent Course: <Link to="/detail/1">ReactJs</Link></p>
          <p className="fw-bold"> Rting: 4.5/5</p>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-header bg-info">Course List</div>
        <div className="list-group list-group-flush">

          <Link to="/category-courses/python" class="list-group-item list-group-item-action">Python</Link>
          <Link to="#" class="list-group-item list-group-item-action">Java</Link>
          <Link to="#" class="list-group-item list-group-item-action">PHP</Link>
          <Link to="#" class="list-group-item list-group-item-action">React</Link>
          <Link to="#" class="list-group-item list-group-item-action">JS</Link>
          
        </div>
      </div>
      <h3 className="mb-4 mt-5 pb-1">Related Courses </h3>
      <div className="row">
        <div className="col-md-3">
          <div className="card my-1">
            <a href="#">
              <img src="/logo512.png" class="card-img-top w-50" alt="course" />
            </a>
            <div className="card-body">
              <a href="#">Details</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card my-1">
            <a href="#">
              <img src="/logo512.png" class="card-img-top w-50" alt="course." />
            </a>
            <div className="card-body">
              <a href="#">Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TeacherDetail;
