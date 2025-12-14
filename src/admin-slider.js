import Menu from "./menu";
import { Link } from "react-router-dom";

export default function AdminSlider() {
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
                      <h4 className="mb-0">Existing Slider</h4>
                      <Link className="btn  btn-primary" to="/Slider/add">
                        Add new
                      </Link>
                    </div>
                    <div className="card-body">
                      {/* Table with Data */}
                      <table
                        id="myTable"
                        className="table table-bordered table-hover"
                      >
                        <thead>
                          <tr>
                            <th width="50px">Sr no</th>
                            <th>Title</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Product ID</th>
                            <th>Image</th>
                            <th width="08%">Operations</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Slider 1</td>
                            <td>19-01-2025</td>
                            <td>19-01-2026</td>
                            <td>10</td>
                            <td>
                              <a
                                href="http://picsum.photos/50"
                                data-fancybox="gallery"
                                data-caption="Smartphone"
                              >
                                <img
                                  src="http://picsum.photos/50"
                                  width={50}
                                  height={50}
                                  className="rounded-circle me-2"
                                  alt="Avatar"
                                />
                              </a>
                            </td>
                            <td className="d-flex justify-content-between align-items-center p-5">
                              <Link to="/slider/edit" title="edit">
                                <i className="fa fa-pencil fa-2x" />
                              </Link>
                              <a
                                href="#"
                                className="text-danger"
                                title="delete"
                              >
                                <i className="fa fa-trash fa-2x" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {/* End Table with Data */}
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
