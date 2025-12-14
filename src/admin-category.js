import Menu from "./menu";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { getBase, getConfig } from "./common";
import { ToastContainer } from "react-toastify";
import { showError, showErrorMessage } from "./message";

export default function AdminCategory() {
  //crate array
  let [categories, setCategory] = useState([]);
  useEffect(() => {
    //it will run after component is mounted
    if (categories.length === 0) {
      //calling api
      var apiAddress = getBase() + "category.php";

      axios(getConfig(apiAddress))
        .then((response) => {
          console.log(response.data);
          var error = response.data[0]["error"];
          if (error !== "no") {
            showErrorMessage(response.data);
          } else {
            var total = response.data[1]["total"];
            if (total === 0) {
              showErrorMessage("No record found");
            } else {
              response.data.splice(0, 2);
              setCategory(response.data);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
  //display data
  let Display = function (item) {
    return (
      <tr className="text-center">
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>
          <a
            href={
              "https://theeasylearnacademy.com/shop/images/category/" +
              item.photo
            }
            data-fancybox="gallery"
            data-caption={item.title}
          >
            <img
              src={
                "https://theeasylearnacademy.com/shop/images/category/" +
                item.photo
              }
              width={50}
              height={50}
              className="rounded-circle me-2" 
              alt="Avatar"
            />
          </a>
        </td>
        <td>{item.islive === "1" ? "Yes" : "No"}</td>
        <td className="d-flex justify-content-between align-items-center">
          <Link to={"/Category/edit/" + item.id} title="edit">
            <i className="fa fa-pencil fa-2x" />
          </Link>
          <button 
            className="text-danger border-0 bg-transparent"
            title="delete"
          >
            <i className="fa fa-trash fa-2x" />
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div>
      <div className="wrapper">
        <ToastContainer />
        <Menu />
        {/* MAIN CONTENT */}
        <main>
          {/* HEADER */}
          <div className="container-fluid">
            {/* Title */}
            <h1 className="h2 bg-dark text-white p-2 mb-4 card">Category</h1>
            <main className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header text-bg-dark d-flex justify-content-between">
                        <h4 className="mb-0">Existing Category</h4>
                        <Link className="btn btn-primary" to="/Category/add">
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
                            <tr className="text-center">
                              <th width="50px">Sr no</th>
                              <th>Title</th>
                              <th>Image</th>
                              <th>is Live?</th>
                              <th width="08%">Operations</th>
                            </tr>
                          </thead>
                          <tbody>
                            {categories.map((item) => Display(item))}
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
    </div>
  );
}
