import Menu from "./menu";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { getBase, getConfig, getImgBase } from "./common";
import { ToastContainer } from "react-toastify";
import { showError, showErrorMessage } from "./message";

export default function AdminProduct() {
  //create array
  let [product, setProduct] = useState([]);
  useEffect(() => {
    //calling a api
    if (product.length === 0) {
      let apiAddress = getBase() + "product.php";
      axios(getConfig(apiAddress))
        .then((response) => {   
          //below code is execute after the api is calling
          console.log(response);
          console.log(response.data);
          let error = response.data[0]["error"];
          if (error !== "no") {
            showErrorMessage(response.data);
          } else {
            let total = response.data[1]["total"];
            if (total === 0) {
              showErrorMessage("No record found");
            } else {
              // deleting a object
              response.data.splice(0, 2);
              //copy remaning array into state array
              setProduct(response.data);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
  let Display = function (item) {
    return (
      <tr className="text-center">
        <td>{item.id}</td>
        <td>
          {item.title}
          <br />({item.categorytitle})
        </td>
        <td>
          <a
            href={getImgBase() + "product/" + item.photo}
            data-fancybox="gallery"
            data-caption={item.title}
          >
            <img
              src={getImgBase() + "product/" + item.photo}
              width
              height={50}
              className="rounded-circle me-2"
              alt="Avatar"
            />
          </a>
        </td>
        <td>
          Rs
          <br />
          {item.price}
        </td>
        <td>{item.stock}</td>
        <td>{item.islive == "1" ? "Yes" : "No"}</td>
        <td className="d-flex justify-content-between align-items-center p-5">
          <Link to={"/product/edit/" + item.id} title="edit">
            <i className="fa fa-pencil fa-2x" />
          </Link>
          <Link to={"/product/view/" + item.id} title="view">
            <i className="fa fa-eye fa-2x" />
          </Link>
          <a href="#" className="text-danger" title="delete">
            <i className="fa fa-trash fa-2x" />
          </a>
        </td>
      </tr>
    );
  };
  return (
    <div>
      <ToastContainer />
      <Menu />
      <main>
        {/* HEADER */}
        <div className="container-fluid">
          {/* Title */}
          <h1 className="h2 bg-dark text-white p-2 mb-4 card">Product</h1>
          <main className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header text-bg-dark d-flex justify-content-between">
                      <h4 className="mb-0">Existing Product</h4>
                      <Link className="btn btn-primary" to="/Product/add">
                        <span>Add new</span>
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
                            <th width="5%">Sr no</th>
                            <th width="25%">Title</th>
                            <th width="25%">Image</th>
                            <th width="05%">Price</th>
                            <th width="05%">Stock</th>
                            <th width="05%">is Live?</th>
                            <th width="10%">Operations</th>
                          </tr>
                        </thead>
                        <tbody>{product.map((item) => Display(item))}</tbody>
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
