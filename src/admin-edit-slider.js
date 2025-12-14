import Menu from "./menu";
import { Link } from "react-router-dom";

export default function AdminEditSlider() {
  return (
    <div>
      <Menu />
      <main>
        {/* HEADER */}
        <div className="container-fluid">
          {/* Title */}
          <h1 className="h2 bg-dark text-white p-2 mb-4 card">Slider</h1>
          <main className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header text-bg-dark d-flex justify-content-between">
                      <h4 className="mb-0">Edit Slider</h4>
                      <Link className="btn  btn-primary" to="/Slider">
                        <span>Back</span>
                      </Link>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="title" className="form-label">
                            Title
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Enter title"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="startdate" className="form-label">
                            startdate
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="startdate"
                            placeholder="Enter startdate"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="enddate" className="form-label">
                            enddate
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="enddate"
                            placeholder="Enter enddate"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="productid" className="form-label">
                            productid
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="productid"
                            placeholder="Enter productid"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="photo" className="form-label">
                            Image
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="photo"
                            required
                          />
                        </div>
                        <div className="text-end">
                          <button type="submit" className="btn  btn-primary">
                            Save
                          </button>
                          <button type="reset" className="btn btn-dark">
                            Clear all
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        {/* Footer */}
        <footer className="mt-auto">
          <div className="container-fluid mt-4 mb-6 text-muted">
            <div className="row justify-content-between">
              <div className="col">© TSM. 2025.</div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
