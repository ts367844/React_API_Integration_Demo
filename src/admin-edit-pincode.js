import Menu from "./menu";
import { Link } from "react-router-dom";

export default function AdminEditPincode() {
  return (
    <div>
      <Menu />
      <main>
        {/* HEADER */}
        <div className="container-fluid">
          {/* Title */}
          <h1 className="h2 bg-dark text-white p-2 mb-4 card">Pincode</h1>
          <main className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header text-bg-dark d-flex justify-content-between">
                      <h4 className="mb-0">Edit Pincode</h4>
                      <Link className="btn btn-primary" to="/Pincode">
                        Back
                      </Link>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="city" className="form-label">
                            city
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="city"
                            placeholder="Enter city"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="Area" className="form-label">
                            Area
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="Area"
                            placeholder="Enter Area"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="pincode" className="form-label">
                            pincode
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="pincode"
                            placeholder="Enter pincode"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="state" className="form-label">
                            state
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="state"
                            placeholder="Enter state"
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
