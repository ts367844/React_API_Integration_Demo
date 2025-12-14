import Menu from "./menu";
import { Link, useNavigate } from "react-router-dom";
import VerifyLogin from "./verify-login";
import { useState } from "react";
import { getBase, getConfig, showError } from "./common";
import axios from "axios";
import { showMessage } from "./message";
import { ToastContainer } from "react-toastify";

export default function AdminAddCategory() {
  //state variable for each input
  let [title, setTitle] = useState("");
  let [photo, setPhoto] = useState("");
  let [islive, setIsLive] = useState(0);
  let navigate = useNavigate();
  let saveCategory = function(e){
    e.preventDefault();
    console.log(title,photo,islive);
    let apiAddress = getBase() + "insert_category.php";
    let form = new FormData();
    form.append("title",title);
    form.append("islive",islive);
    form.append("photo",photo);
    axios(getConfig(apiAddress,"post",form)).then((response)=>{
      console.log(response.data);
      let error = response.data[0]['error'];
      if(error !== 'no')
        showError(error);
      else{
        let success = response.data[1]['success'];
        let message = response.data[2]['message'];
        if(success === 'yes'){
          showMessage(message);
          //replace current screen with category screen after 2 seconds
          setTimeout(()=>{
            navigate("/category");
          },2000);
        }
        else{
          showError(message);
        }
      }
    }).catch((e)=>showError(e));
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
                      <h4 className="mb-0">Add new category</h4>
                      <Link className="btn btn-primary" to="/category">
                        <span>Back</span>
                      </Link>
                    </div>
                    <div className="card-body">
                      <form onSubmit={saveCategory}>
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
                            onChange={(e)=>setTitle(e.target.value)}
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
                            onChange={(e)=>setPhoto(e.target.files[0])}
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
                                onChange ={(e)=>setIsLive(e.target.value)}
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
                                onChange ={(e)=>setIsLive(e.target.value)}
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
