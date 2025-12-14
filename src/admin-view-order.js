import Menu from "./menu";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams} from "react-router-dom";
import { useEffect , useState} from "react";
import { getBase , getConfig , getImgaBase} from "./common";
import { ToastContainer } from "react-toastify";
import { showError, showErrorMessage } from "./message";

export default function AdminViewOrder() {
  //create array
  let [order , setOrder] = useState([]);
  var [orderDetail, setOrderDetail] = useState([]);
  var {id}= useParams();
  const [fullname, setFullname] = useState("");
  const [billdate, setBilldate] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [mobile, setMobile] = useState("");
  const [paymentmode, setPaymentmode] = useState("");
  const [paymentstatus, setPaymentstatus] = useState("");
  const [orderstatus, setOrderstatus] = useState(""); 
  const [remarks, setRemarks] = useState("");
  const [amount, setAmount] = useState("");
  useEffect(() => {
      //calling a api
      if(order.length === 0){
        let apiAddress = getBase() + "orders.php?id=" + id;
        axios(getConfig(apiAddress))
        .then((response) =>{
          console.log(response);
          console.log(response.data);
          let error = response.data[0]["error"];
          if(error !== "no"){
            showErrorMessage(response.data);
          }else{
            let total = response.data[1]["total"];
            if(total === 0){
              showErrorMessage("No record found");
            }else{
              //copy remaining array into state array
              setOrder(response.data);
              setFullname(response.data[2]["fullname"]);
              setBilldate(response.data[2]["billdate"]);
              setAddress1(response.data[2]["address1"]);
              setAddress2(response.data[2]["address2"]);
              setCity(response.data[2]["city"]);
              setPincode(response.data[2]["pincode"]);
              setMobile(response.data[2]["mobile"]);
              setPaymentmode(response.data[2]["paymentmode"]);
              setPaymentstatus(response.data[2]["paymentstatus"]);
              setOrderstatus(response.data[2]["orderstatus"]);
              setRemarks(response.data[2]["remarks"]);
              setAmount(response.data[2]["amount"]);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
      }
  });
   useEffect(() => {
    //calling a api
    if (orderDetail.length === 0) {
      let apiAddress = getBase() + "order_detail.php?orderid=" + id;
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
              setOrderDetail(response.data);
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
  let showPaymentMode = function (paymentmode) {
    if (paymentmode === "0") return "COD";
    else return "Online";
  };
  let showPaymentStatus = function (paymentstatus) {
    if (paymentstatus === "1") return "Confirmed";
    else  return "Panding";
  };
  return (
    <div>
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
                    <div className="card-header text-white bg-dark d-flex justify-content-between">
                      <h4 className="my-1">Order Detail of ID : {id}</h4>
                      <h4 className="my-1">
                        Date :- {billdate}
                        <Link
                          to="/Order/print"
                          className="btn mx-4 btn-success"
                        >
                          Print
                        </Link>
                        <Link className="btn btn-primary" to="/Order">
                          <span>Back</span>
                        </Link>
                      </h4>
                    </div>
                    <div className="card-body">
                      <h4>Order Detail</h4>
                      <table className="table table-sm table-striped">
                        <tbody>
                          <tr>
                            <td width="25%">Fullname</td>
                            <td width="25%" >{fullname}</td>
                            <td width="25%">No of items</td>
                            <td width="25%" />
                          </tr>
                          <tr>
                            <td>Address</td>
                            <td >{address1 +" , "+ address2}</td>
                            <td>Date</td>
                            <td >{billdate}</td>
                          </tr>
                          <tr>
                            <td>City</td>
                            <td >{city}</td>
                            <td>Payment mode</td>
                            <td >{showPaymentMode(paymentmode)}</td>
                          </tr>
                          <tr>
                            <td>Pincode</td>
                            <td >{pincode}</td>
                            <td>payment status</td>
                            <td >{showPaymentStatus(paymentstatus)}</td>
                          </tr>
                          <tr>
                            <td>Mobile</td>
                            <td >{mobile}</td>
                            <td>order status</td>
                            <td>    
                                {showOrderStatus(orderstatus)}
                            </td>
                          </tr>
                          <tr>
                            <td>Remarks</td>
                            <td >{remarks}</td>
                            <td>Amount</td>
                            <td >{amount}</td>
                          </tr>
                        </tbody>
                      </table>
                      <h4>Item Detail</h4>
                      <table className="table table-sm table-striped">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th className="text-end">Price</th>
                            <th className="text-end">Qty</th>
                            <th className="text-end">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>IPhone 16 pro max</td>
                            <td className="text-end">150000</td>
                            <td className="text-end">1</td>
                            <td className="text-end">150000</td>
                          </tr>
                          <tr>
                            <td colSpan={4} className="fw-bold">
                              Total
                            </td>
                            <td className="text-end">Rs 150000</td>
                          </tr>
                        </tbody>
                      </table>
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
