import { Link, useParams } from "react-router-dom";

function CourseDetail() {
  let { course_id } = useParams();
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4">
          <img src="/logo512.png" className="img-thumbnail" alt="..." />
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
            Course By: <Link to="/teacher_detail/1">Teacher 1</Link>
          </p>
          <p className="fw-bold"> Duration: 12h 10m</p>
          <p className="fw-bold"> Total enroll: 126</p>
          <p className="fw-bold"> Rting: 4.5/5</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mt-4">
          <h5>Others nesessary photo</h5>
          <p>ndard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining es</p>
        </div>
        <div className="col-md-6">
          <div className="card mt-4">
            <div className="card-header">Course Videos</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                An item
                <span className="float-end">
                  <small className="me-5">1h 30 mins</small>
                  <button className="btn btn-sm btn-danger" data-toggle="modal" data-target="#exampleModal"><i className="bi-youtube"></i></button>
                  </span>
                  {/* <!-- Modal --> */}
                  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                        <div class="embed-responsive embed-responsive-16by9">
                          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Modal end --> */}

              </li>
              <li className="list-group-item">
                Introduction
                <span className="float-end">
                  <small className="me-5">2h 30 mins</small>
                  <button className="fa-solid fa-play"></button>
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
              <img src="/logo512.png" className="card-img-top w-75" alt="..." />
            </a>
            <div className="card-body">
              <a href="#">Details</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card my-1">
            <a href="#">
              <img src="/logo512.png" className="card-img-top w-75" alt="..." />
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
