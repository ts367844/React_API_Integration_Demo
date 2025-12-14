import Menu from "./menu";
import { Link , useParams} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { getBase, getConfig, getImgBase } from "./common";
import { ToastContainer } from "react-toastify";
import { showError, showErrorMessage } from "./message";

export default function AdminViewProduct() {
  // create array
   const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);
  const [size, setSize] = useState("");
  const [detail, setDetail] = useState("");
  const [stock, setStock] = useState(0);
  const [oldPhoto, setOldPhoto] = useState(null); //used to store photo fetched from server
  const [isLive, setIsLive] = useState(false);
  const [isFetch, setIsFetched] = useState(false);
   const { id } = useParams();
  useEffect(() => {
    if (isFetch === false) {
      let apiAddress = getBase() + "product.php?productid=" + id;
      axios(getConfig(apiAddress)).then((response) => {
        //code will only execute after we got response from api.
        console.log(response.data);
        let error = response.data[0]['error'];
        if (error !== 'no')
          showErrorMessage(error);
        else {
          let total = response.data[1]['total'];
          if (total === 0)
            showErrorMessage('no product found');
          else {
            setTitle(response.data[2]['title']);
            setCategoryId(response.data[2]['categoryid']);
            setDetail(response.data[2]['detail']);
            setIsLive(response.data[2]['islive']);
            setOldPhoto(response.data[2]['photo']);
            setPrice(response.data[2]['price']);
            setSize(response.data[2]['size']);
            setWeight(response.data[2]['weight']);
            setStock(response.data[2]['stock']);
            setIsFetched(true); //prevent calling api again
          }
        }
      }).catch((error) => {
        console.log(error);
      });
    }

  });
  return (
    <div>
      <Menu />
      <main>
        {/* HEADER */}
        <div className="container-fluid">
          <h1 className="h2 bg-dark text-white p-2 mb-4 card">Product</h1>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between text-bg-dark">
                  <h4 className="mb-0 ">IPhone 16 pro max</h4>
                  <Link className="btn btn-primary" to="/Product">
                    Back
                  </Link>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-4">
                      <a
                        href={getImgBase() + "product/" + oldPhoto} 
                        data-fancybox="gallery"
                        data-caption="Smartphone"
                      >
                        <img
                          src={getImgBase() + "product/" + oldPhoto} 
                          width
                          height={350}
                          className="img-fluid img-thumbnail"
                          alt="Avatar"
                        />
                      </a>
                    </div>
                    <div className="col-8">
                      <table className="table table-bordered table-striped">
                        <tbody>
                          <tr>
                            <th width="20%">product id</th>
                            <td >{id}</td>
                          </tr>
                          <tr>
                            <th width="20%">Category ID</th>
                            <td >{categoryId}</td>
                          </tr>
                          <tr>
                            <th width="20%">Price</th>
                            <td > {price}</td>
                          </tr>
                          <tr>
                            <th width="20%">Size</th>
                            <td >{size}</td>
                          </tr>
                          <tr>
                            <th width="20%">Weight</th>
                            <td >{weight}</td>
                          </tr>
                          <tr>
                            <th width="20%">Stock</th>
                            <td > {stock}</td>
                          </tr>
                          <tr>
                            <th width="20%">Is Live</th>
                            <td >{isLive=='1' ? "Yes" : "No"}</td>
                          </tr>
                          <tr>
                            <th width="20%">Detail</th>
                            <td >{detail}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
