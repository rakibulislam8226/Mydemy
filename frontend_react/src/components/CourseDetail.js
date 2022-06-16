import { useParams } from "react-router-dom";

function CourseDetail() {
  let { course_id } = useParams();
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4">
          <img src="/logo512.png" class="img-thumbnail" alt="..." />
        </div>
        <div className="col-md-8 ">
          <h4>Course title</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="fw-bold">
            {" "}
            Course By: <a href="#">Teacher 1</a>
          </p>
          <p className="fw-bold"> Duration: 12h 10m</p>
          <p className="fw-bold"> Total enroll: 126</p>
          <p className="fw-bold"> Rting: 4.5/5</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mt-4">
          <h5>Others nesessary photo</h5>
        </div>
        <div className="col-md-6">
          <div className="card mt-4">
            <div className="card-header">Course Videos</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                An item
                <span className="float-end">
                  <small className="me-5">1h 30 mins</small>
                  <button class="fa-solid fa-play"></button>
                </span>
              </li>
              <li className="list-group-item">
                Introduction
                <span className="float-end">
                  <small className="me-5">2h 30 mins</small>
                  <button class="fa-solid fa-play"></button>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h3 className="mb-4 mt-5 pb-1">Related Courses </h3>
      <div className="row">
        <div className="col-md-3">
          <div className="card my-1">
            <a href="#">
              <img src="/logo512.png" class="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#">Details</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card my-1">
            <a href="#">
              <img src="/logo512.png" class="card-img-top" alt="..." />
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
export default CourseDetail;
