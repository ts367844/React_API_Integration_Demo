import Menu from "./menu";
import { Link,useParams,useNavigate } from "react-router-dom";
import { useEffect , useState} from "react";
import axios, { toFormData } from "axios";
import { getBase , getConfig , getImgBase} from "./common";
import { showErrorMessage , showMessage } from "./message";
import { ToastContainer } from "react-toastify";

export default function AdminEditProduct() {
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);
  const [size, setSize] = useState("");
  const [detail, setDetail] = useState("");
  const [stock, setStock] = useState(0);
  const [oldPhoto, setOldPhoto] = useState(null); //used to store photo fetched from server
  const [photo, setPhoto] = useState(null); //used to store user select photo
  const [isLive, setIsLive] = useState(false);
  const [isFetch, setIsFetched] = useState(false);
  const [categories,setCategories] = useState([]); //used to stored fetched categories
  const { id } = useParams();
  const navigate = useNavigate();
  let fetchCategories = function () {
    if (categories.length === 0) {
      //typically it is used to call api 
      var apiAddress = getBase() + "category.php";
      var config = {
        method: 'get',
        responseType: 'json',
        url: apiAddress
      };
      axios(config).then((response) => {
        console.log(response.data);
        var error = response.data[0]['error'];
        if (error != 'no') {
          alert(error);
        }
        else {
          var total = response.data[1]['total'];
          if (total === 0)
            alert('no category found');
          else {
            response.data.splice(0, 2); //delete 1st two object.
            setCategories(response.data);
          }
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  }
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
            fetchCategories();
            setIsFetched(true); //prevent calling api again
          }
        }
      }).catch((error) => {
        console.log(error);
      });
    }

  });
  let updateProduct = function(e)
  {
      e.preventDefault();
      console.log(title, categoryId, price, weight, size, detail, stock, photo, isLive);
      //call update api for product
      var apiAddress = getBase() + "update_product.php?id=" + id;
      var form = new FormData();
      form.append('id', id);
      form.append('title', title);
      form.append('categoryid', categoryId);
      form.append('price', price);
      form.append('weight', weight);
      form.append('size', size);
      form.append('detail', detail);
      form.append('stock', stock);
      form.append('photo', photo);
      form.append('islive', isLive);
      var config = {
        method: 'post',
        responseType: 'json',
        url: apiAddress,
        data: form
      };
      axios(config).then((response) => {
        console.log(response.data);
        var error = response.data[0]['error'];
        if (error !== 'no') {
          showErrorMessage(error);
        }
        else {
          var success = response.data[1]['success'];
          var message = response.data[2]['message'];
          if (success === 'yes') {
            showMessage(message);
            navigate('/Product');
          }
        }
      }).catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <Menu />
      <ToastContainer />
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
                      <h4 className="mb-0">Edit Product</h4>
                      <Link className="btn btn-primary" to="/Product">
                        Back
                      </Link>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-2">
                          <div className="fw-bold">Existing Image</div>
                          <img src={getImgBase() + "product/" + oldPhoto} className="img-fluid" alt="Avatar" />
                        </div>
                        <div className="col-10">
                        <form onSubmit ={updateProduct}>
                          <div className="row g-3">
                            <div className="col-md-6">
                          <label htmlFor="title" className="form-label">
                            Title
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Enter title"
                            required
                            value = {title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="category" className="form-label">Category:</label>
                              <select className="form-select" id="category" name="category" required
                                onChange={(e) => setCategoryId(e.target.value)}>
                                <option value>Select a category</option>
                                {categories.map((item) => {
                                  return <option value={item.id}>{item.title}</option>
                                })}
                              </select>
                            </div>
                            <div className="col-md-3">
                              <label htmlFor="price" className="form-label">Price:</label>
                              <input type="number" className="form-control" id="price" name="price" required
                               value={price} onChange={(e) => setPrice(e.target.value)}  />
                            </div>
                            <div className="col-md-3">
                              <label htmlFor="weight" className="form-label">Weight:</label>
                              <input type="number" className="form-control" id="weight" name="weight" required
                              value={weight} onChange={(e) => setWeight(e.target.value)}  />
                            </div>
                            <div className="col-md-3">
                              <label htmlFor="stock" className="form-label">stock:</label>
                              <input type="number" className="form-control" id="stock" name="stock" required
                               value={stock}  onChange={(e) => setStock(e.target.value)} />
                            </div>
                            <div className="col-md-3">
                              <label htmlFor="size" className="form-label">Size:</label>
                              <input type="text" className="form-control" id="size" name="size" required
                               value={size} onChange={(e) => setSize(e.target.value)}  />
                            </div>
                            <div className="col-md-3">
                              <div className="mb-3">
                                <label htmlFor="photo" className="form-label">Image</label>
                                <input type="file" className="form-control" id="photo"  name="photo"
                                  onChange={(e) => setPhoto(e.target.files[0])} />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="detail" className="form-label">Detail:</label>
                              <textarea className="form-control" id="detail" name="detail" required
                                defaultValue={detail} onChange={(e) => setDetail(e.target.value)} />
                            </div>
                            <div className="col-3">
                              <label className="form-label">Is Live:</label>
                              <div className="form-check">
                                <input className="form-check-input" type="radio" id="islive-yes" name="islive" value="1" required checked={(isLive === '1')} onChange={(e) => setIsLive(e.target.value)} />
                                <label className="form-check-label" htmlFor="islive-yes">Yes</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="radio" id="islive-no" name="islive" value="0" required checked={(isLive === '0')} onChange={(e) => setIsLive(e.target.value)} />
                                <label className="form-check-label" htmlFor="islive-no">No</label>
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
                        </div>
                        </form>
                        </div>
                      </div>
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
