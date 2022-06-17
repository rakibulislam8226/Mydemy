import { Link } from "react-router-dom";
function PopularTeacher() {
  return (
    
    <div className="container mt-4">
    <div className="row">
      {/* start latest courses  */}
      <h3 className="my-2 pb-1"> Popular Teacher </h3>

      <div className="col-md-3">
        <div className="card my-1">
          <a href="#">
            <img src="teacher.png" class="card-img-top w-75" alt="..." />
          </a>
          <div className="card-body">
            <Link to="/detail/1">Details</Link>
          </div>

          <div className="card-footer">
            <div className="title">
              <span>rating: 4.5/5</span>
              <span className="float-end">Views: 75486</span>
            </div>
          </div>

        </div>
      </div>
      <div className="col-md-3">
        <div className="card my-1">
          <a href="#">
            <img src="teacher.png" class="card-img-top w-75" alt="..." />
          </a>
          <div className="card-body">
            <Link to="/detail/1">Details</Link>
          </div>

          <div className="card-footer">
            <div className="title">
              <span>rating: 4.5/5</span>
              <span className="float-end">Views: 75486</span>
            </div>
          </div>

        </div>
      </div>
      <div className="col-md-3">
        <div className="card my-1">
          <a href="#">
            <img src="teacher.png" class="card-img-top w-75" alt="..." />
          </a>
          <div className="card-body">
            <Link to="/detail/1">Details</Link>
          </div>

          <div className="card-footer">
            <div className="title">
              <span>rating: 4.5/5</span>
              <span className="float-end">Views: 75486</span>
            </div>
          </div>

        </div>
      </div>
      <div className="col-md-3">
        <div className="card my-1">
          <a href="#">
            <img src="teacher.png" class="card-img-top w-75" alt="..." />
          </a>
          <div className="card-body">
            <Link to="/detail/1">Details</Link>
          </div>

          <div className="card-footer">
            <div className="title">
              <span>rating: 4.5/5</span>
              <span className="float-end">Views: 75486</span>
            </div>
          </div>

        </div>
      </div>
      <div className="col-md-3">
        <div className="card my-1">
          <a href="#">
            <img src="teacher.png" class="card-img-top w-75" alt="..." />
          </a>
          <div className="card-body">
            <Link to="/detail/1">Details</Link>
          </div>

          <div className="card-footer">
            <div className="title">
              <span>rating: 4.5/5</span>
              <span className="float-end">Views: 75486</span>
            </div>
          </div>

        </div>
      </div>
      <div className="col-md-3">
        <div className="card my-1">
          <a href="#">
            <img src="teacher.png" class="card-img-top w-75" alt="..." />
          </a>
          <div className="card-body">
            <Link to="/detail/1">Details</Link>
          </div>

          <div className="card-footer">
            <div className="title">
              <span>rating: 4.5/5</span>
              <span className="float-end">Views: 75486</span>
            </div>
          </div>

        </div>
      </div>
      <div className="col-md-3">
        <div className="card my-1">
          <a href="#">
            <img src="teacher.png" class="card-img-top w-75" alt="..." />
          </a>
          <div className="card-body">
            <Link to="/detail/1">Details</Link>
          </div>

          <div className="card-footer">
            <div className="title">
              <span>rating: 4.5/5</span>
              <span className="float-end">Views: 75486</span>
            </div>
          </div>

        </div>
      </div>
      <div className="col-md-3">
        <div className="card my-1">
          <a href="#">
            <img src="teacher.png" class="card-img-top w-75" alt="..." />
          </a>
          <div className="card-body">
            <Link to="/detail/1">Details</Link>
          </div>

          <div className="card-footer">
            <div className="title">
              <span>rating: 4.5/5</span>
              <span className="float-end">Views: 75486</span>
            </div>
          </div>

        </div>
      </div>

    </div>
    {/* pagination start */}
    <nav aria-label="...">
      <ul class="pagination justify-content-center my-5">
        <li class="page-item disabled">
          <span class="page-link">Pre</span>
        </li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item " aria-current="page">
          <span class="page-link">2</span>
        </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
     {/* pagination end */}
  </div>
  );
}
export default PopularTeacher;