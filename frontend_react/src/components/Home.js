import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* start latest courses  */}
        <h3 className="my-4 pb-1">
          Latest Courses{" "}
          <a href="#" className="float-end">
            See all
          </a>
        </h3>
        <div className="col-md-3">
          <div className="card my-1">
            <a href="#">
              <img src="logo512.png" class="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <Link to="/detail/1">Details</Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card my-1">
            <a href="#">
              <img src="logo512.png" class="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#">Details</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card my-1">
            <a href="#">
              <img src="logo512.png" class="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#">Details</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card my-1">
            <a href="#">
              <img src="logo512.png" class="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#">Details</a>
            </div>
          </div>
        </div>
        {/* end latest courses  */}

        {/* start popular courses  */}
        <h3 className="mb-4 mt-5 pb-1">
          Popular Courses
          <a href="#" className="float-end">
            See all
          </a>
        </h3>
        <div className="col-md-3">
          <div className="card my-1">
            <a href="#">
              <img src="logo512.png" class="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#">Details</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card my-1">
            <a href="#">
              <img src="logo512.png" class="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#">Details</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card my-1">
            <a href="#">
              <img src="logo512.png" class="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#">Details</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card my-1">
            <a href="#">
              <img src="logo512.png" class="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#">Details</a>
            </div>
          </div>
        </div>
        {/* end popular courses  */}

        {/* start popular courses  */}
        <h3 className="mb-4 mt-5 pb-1">Teacher Testimonial</h3>
        <div
          id="carouselExampleIndicators"
          className="carousel slide bg-black"
          data-ride="carousel"

        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner my-2">
            <div className="carousel-item active">
              <blockquote className="blockquote text-center">
                <p className="mb-4">
                  A well-known quote, contained in a blockquote element.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
            <div className="carousel-item">
              <blockquote className="blockquote text-center">
                <p className="mb-4">
                  A well-known quote, contained in a blockquote element.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
            <div className="carousel-item">
              <blockquote className="blockquote text-center">
                <p className="mb-4">
                  A well-known quote, contained in a blockquote element.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-target="#carouselExampleIndicators"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-target="#carouselExampleIndicators"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
