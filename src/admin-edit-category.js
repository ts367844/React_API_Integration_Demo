import Menu from "./menu";
import { Link,useNavigate } from "react-router-dom";
import { useParams} from "react-router-dom";
import { useEffect , useState} from "react";
import axios from "axios";
import { ToastContainer} from "react-toastify";
import { getBase , getConfig , getImgBase , showError} from "./common";
import { showMessage} from "./message";
export default function AdminEditCategory() {
  //create a variable id and store parameter's value id into it
  var {id}= useParams();
  var [isFetched,setIsFetched]=useState(false);
  var [title,setTitle]=useState('');
  var [oldPhoto,setOldPhoto]=useState('');
  var [photo,setPhoto]=useState('');
  var [islive,setIsLive]=useState('');
  var navigate = useNavigate();
  useEffect(()=>{
    if(isFetched === false)
    {
      //Below code is used to call  a api
      var apiAddress = getBase() + "category.php?id=" + id;
      var config = {
        method: 'get',
        responseType: 'json',
        url: apiAddress
      };

      axios(config).then((response)=>{
        console.log(response.data);
        var error = response.data[0]['error'];
        if(error != 'no'){
          alert(error);
        }
        else{
          var total = response.data[1]['total'];
          if(total === 0)
            alert("No category found");
          else{
            setTitle(response.data[2]['title']);
            setOldPhoto(response.data[2]['photo']);
            setIsLive(response.data[2]['isLive']);
            setIsFetched(true);
          }
        }
      }).catch((error)=>{
        console.log(error);
      });
    }
  });
  let updateCategory = function (e) {
    e.preventDefault();
    console.log(title, photo, islive);
    //call update api for category
    //https://theeasylearnacademy.com/shop/ws/update_category.php
    var apiAddress = getBase() + "update_category.php?id=" + id;
    var form = new FormData();
    form.append('id', id);
    form.append('title', title);
    form.append('photo', photo);
    form.append('islive', islive);
    var config = {
      method: 'post',
      responseType: 'json',
      url: apiAddress,
      data: form
    };
    axios(config).then((response) => {
      console.log(response.data);
      var error = response.data[0]['error'];
      if (error != 'no') {
        showError(error);
      }
      else {
        var success = response.data[1]['success'];
        var message = response.data[2]['message'];
        if (success === 'yes') {
          showMessage(message);
          setTimeout(() => {
            navigate("/category");
          }, 2000);
        }
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div>
      <ToastContainer />
      <Menu />
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
                      <h4 className="mb-0">Edit category</h4>
                      <Link className="btn btn-primary" to="/Category">
                        <span>Back</span>
                      </Link>
                    </div>
                    <div className="card-body">
                      <div class="row">
                        <div className="col-2">
                          <div className="fw-bold">Existing Image</div>
                          <img src={getImgBase() + "category/" + oldPhoto} className="img-fluid" alt="Avatar" />
                        </div>
                        <div className="col-10">
                        <form onSubmit={updateCategory}>
                        <div className="mb-3">
                          <label htmlFor="title" className="form-label">
                            Title
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Enter title"
                            required
                            value={title}
                            onChange={(e)=> setTitle(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="photo" className="form-label">
                            Image
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="photo"
                            required
                            onChange={(e)=> setPhoto(e.target.files[0])} 
                            accept="image/*"
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
                                value="1"
                                required
                                onChange={(e)=> setIsLive(e.target.value)}
                                checked={(islive === '1')} 
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
                                value="0"
                                required
                                onChange={(e)=> setIsLive(e.target.value)}
                                checked={(islive === '0')}
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
