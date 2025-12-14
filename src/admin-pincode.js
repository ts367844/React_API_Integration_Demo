import Menu from "./menu";
import { Link } from "react-router-dom";

export default function AdminPincode() {
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
                      <h4 className="mb-0">Existing Pincode</h4>
                      <Link className="btn  btn-primary" to="/Pincode/add">
                        <div>Add new</div>
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
                            <th>City</th>
                            <th>Area</th>
                            <th>Pincode</th>
                            <th>State</th>
                            <th>is Live?</th>
                            <th width="08%">Operations</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-center">
                            <td>1</td>
                            <td>Bhavnagar</td>
                            <td>Gayatrinagar</td>
                            <td>364001</td>
                            <td>Gujarat</td>
                            <td>Yes</td>
                            <td className="d-flex justify-content-between align-items-center p-5">
                              <Link to="/pincode/edit" title="edit">
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
