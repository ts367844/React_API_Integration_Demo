import Menu from "./menu";
import { Link } from "react-router-dom";

export default function AdminAddShipping() {
  return (
    <div>
      <Menu />
      <main>
        {/* HEADER */}
        <div className="container-fluid">
          {/* Title */}
          <h1 className="h2 bg-dark text-white p-2 mb-4 card">Shipping</h1>
          <main className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header text-bg-dark d-flex justify-content-between">
                      <h4 className="mb-0">Add new Shipping</h4>
                      <Link className="btn btn-primary" to="/Shipping">
                        Back
                      </Link>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="classname" className="form-label">
                            classname
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="classname"
                            placeholder="Enter classname"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="weight" className="form-label">
                            weight
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="weight"
                            placeholder="Enter weight(KG)"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="price" className="form-label">
                            price
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="price"
                            placeholder="Enter price"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Is Live</label>
                          <div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="islive"
                                id="liveYes"
                                defaultValue="yes"
                                required
                              />
                              <label
                                className="form-check-label"
                                htmlFor="liveYes"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="islive"
                                id="liveNo"
                                defaultValue="no"
                                required
                              />
                              <label
                                className="form-check-label"
                                htmlFor="liveNo"
                              >
                                No
                              </label>
                            </div>
                          </div>
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
