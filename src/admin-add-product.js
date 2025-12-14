import Menu from "./menu";
import { Link , useNavigate  } from "react-router-dom";
import { useEffect , useState } from "react";
import axios from "axios";
import { getBase, getConfig, getImgBase ,showError } from "./common";
import { showErrorMessage , showMessage } from "./message";
import { ToastContainer } from "react-toastify";

export default function AdminAddProduct() {
  
  let navigate = useNavigate();
  //state variable for each input
  let [title,setTitle] = useState("");
  let [category,setCategory] = useState("");
  let [Categories,setCategories] = useState([]);
  let [price,setPrice] = useState(0);
  let [stock,setStock] = useState(0);
  let [weight, setWeight] = useState(0);
  let [size, setSize] = useState('');
  let [detail, setDetail] = useState('');
  let [photo, setPhoto] = useState(null); // Assuming photo is a file or URL
  let [islive, setIsLive] = useState(false);

  let saveProduct = function(e){
    e.preventDefault();
    console.log({title,category,price,stock,weight,size,detail,photo,islive});

    let apiAddress = getBase() + "insert_product.php";
    let form = new FormData();
    form.append("name",title);
    form.append("categoryid",category);
    form.append("price",price);
    form.append("stock",stock);
    form.append("weight",weight);
    form.append("size",size);
    form.append("detail",detail);
    form.append("photo",photo);
    form.append("islive",islive);

    axios(getConfig(apiAddress,'post',form)).then((response) =>{
      console.log(response.data);
      let error = response.data[0]['error'];
      if(error !== 'no')
      {
        showErrorMessage(error);
      }
      else
      {
        let message = response.data[1]['message'];
        showMessage(message);
        navigate("/product");
      }
    }).catch((error) => {
      showError(error);
    });
  }

  useEffect(() =>{
      if(Categories.length === 0)
      {
        //calling a api
        let apiAddress = getBase() + "category.php";
        var config =  getConfig(apiAddress);
        axios(config).then((response) =>{
          console.log(response.data);
          var error = response.data[0]['error'];
          if(error !== 'no')
            alert(error);
          else
          {
            var total = response.data[1]['total'];
            if(total === 0)
                alert("No record found");
            else
            {
              response.data.splice(0,2);//deleting first two object
              setCategories(response.data);
            }
          }
        }).catch((error) =>{
          console.log(error);
        });
      }
  })

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
                      <h4 className="mb-0">Add Product</h4>
                      <Link className="btn btn-primary" to="/Product">
                        Back
                      </Link>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                        <form onSubmit ={saveProduct}>
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
                            onChange={(e) => setTitle(e.target.value)}
                            value = {title}
                          />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="category" className="form-label">Category:</label>
                              <select className="form-select" id="category" name="category" required
                                onChange={(e) => setCategory(e.target.value)}>
                                <option value>Select a category</option>
                                {Categories.map((item) => {
                                  return <option value={item.id}>{item.title}</option>
                                })}
                              </select>
                            </div>
                            <div className="col-md-3">
                              <label htmlFor="price" className="form-label">Price:</label>
                              <input type="number" className="form-control" id="price" name="price" required
                                onChange={(e) => setPrice(e.target.value)} value={price} />
                            </div>
                            <div className="col-md-3">
                              <label htmlFor="weight" className="form-label">Weight:</label>
                              <input type="number" className="form-control" id="weight" name="weight" required
                                onChange={(e) => setWeight(e.target.value)} value={weight} />
                            </div>
                            <div className="col-md-3">
                              <label htmlFor="stock" className="form-label">stock:</label>
                              <input type="number" className="form-control" id="stock" name="stock" required
                                onChange={(e) => setStock(e.target.value)} value={stock} />
                            </div>
                            <div className="col-md-3">
                              <label htmlFor="size" className="form-label">Size:</label>
                              <input type="text" className="form-control" id="size" name="size" required
                                onChange={(e) => setSize(e.target.value)} value={size} />
                            </div>
                            <div className="col-md-3">
                              <div className="mb-3">
                                <label htmlFor="photo" className="form-label">Image</label>
                                <input type="file" className="form-control" id="photo" required
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
                                <input className="form-check-input" type="radio" id="islive-yes" name="islive" value="1" required onChange={(e) => setIsLive(e.target.value)} />
                                <label className="form-check-label" htmlFor="islive-yes">Yes</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="radio" id="islive-no" name="islive" value="0" required onChange={(e) => setIsLive(e.target.value)} />
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
