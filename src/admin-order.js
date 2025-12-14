import Menu from "./menu";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { getBase, getConfig, getImgBase } from "./common";
import { ToastContainer } from "react-toastify";
import { showError, showErrorMessage } from "./message";

export default function AdminOrder() {
  //create array
  let [order, setOrder] = useState([]);
  useEffect(() => {
    //calling a api
    if (order.length === 0) {
      let apiAddress = getBase() + "orders.php";
      axios(getConfig(apiAddress))
        .then((response) => {
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
              setOrder(response.data);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
  let showOrderStatus = function (orderstatus) {
    if (orderstatus === "1") return "Confirmed";
    else if (orderstatus === "2") return "Displatched";
    else if (orderstatus === "3") return "Received";
    else if (orderstatus === "4") return "Return";
    else if (orderstatus === "5") return "Cancel";
  };
  let Display = function (item) {
    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.billdate}</td>
        <td>{item.amount}</td>
        <td>{item.fullname}</td>
        <td>{showOrderStatus(item.orderstatus)}</td>
        <td>
          {item.city} - {item.pincode}
        </td>
        <td className="d-flex justify-content-evenly">
          <Link to={"/Order/view/" + item.id} title="view history">
            <i className="fa fa-eye fa-2x" />
          </Link>
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
          <h1 className="h2 bg-dark text-white p-2 mb-4 card">Orders</h1>
          <main className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header text-white bg-dark">
                      <h4 className="mb-0">Recent Orders</h4>
                    </div>
                    <div className="card-body">
                      {/* Table with Data */}
                      <table
                        id="myTable"
                        className="table table-bordered table-hover"
                      >
                        <thead>
                          <tr>
                            <th width="50px">ID</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>FullName</th>
                            <th>Status</th>
                            <th>Delivery</th>
                            <th width="7%">Operations</th>
                          </tr>
                        </thead>
                        <tbody>{order.map((item) => Display(item))}</tbody>
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
