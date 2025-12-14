import { Link, useNavigate } from "react-router-dom";
import { getBase, getConfig, showError, FILE_NAME } from "./common";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { showErrorMessage, showMessage } from "./message";
import { ToastContainer } from "react-toastify";

export default function AdminLogin() {
  //state variables
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  //create variable and function using useCookies hook
  let [cookies, removeCookie, setCookie] = useCookies(FILE_NAME);

  //hook fuction using useCookies
  let navigate = useNavigate();

  let checkLogin = function (e) {
    e.preventDefault();
    console.log(email, password);
    let apiAddress = getBase() + "admin_login.php";

    let form = new FormData();
    form.append("email", email);
    form.append("password", password);

    // store input in it

    axios(getConfig(apiAddress, "post", form))
      .then((response) => {
        console.log(response.data);
        let error = response.data[0]["error"];
        if (error !== "no") showErrorMessage(error);
        else {
          let success = response.data[1]["success"];
          let message = response.data[2]["message"];

          if (success === "yes") {
            setCookie("name", "ankit patel");
            setCookie("id", response.data[3]["id"]);
            showMessage(message);
            console.log(cookies["name"], cookies["id"]);
            setTimeout(() => {
              navigate("/Dashboard");
            }, 2000);
          } else showErrorMessage(message);
        }
      })
      .catch((error) => {
        showError(error);
      });
  };
  return (
    <>
      <ToastContainer />
      <main>
        <div class="container-fluid">
          <div class="row align-items-center justify-content-center vh-100">
            <div class="col-11 col-sm-8 col-md-6 col-lg-5 col-xl-4 col-xxl-3 py-6">
              {/* Title */}
              <h1 class="mb-2 text-center">Sign In</h1>
              {/* Subtitle */}
              <p class="text-secondary text-center">
                Enter your email address and password to access admin panel
              </p>
              {/* Form */}
              <form onSubmit={checkLogin}>
                <div class="row">
                  <div class="col-12">
                    <div class="mb-4">
                      {/* Label */}
                      <label class="form-label">Email Address</label>
                      {/* Input */}
                      <input
                        class="form-control"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    {/* Password */}
                    <div class="mb-4">
                      <div class="row">
                        <div class="col">
                          {/* Label */}
                          <label class="form-label">Password</label>
                        </div>
                        <div class="col-auto">
                          {/* Help text */}
                          <a
                            href="reset-password-illustration.html"
                            class="form-text small text-muted link-primary"
                          >
                            Forgot password
                          </a>
                        </div>
                      </div>{" "}
                      {/* / .row */}
                      {/* Input */}
                      <div class="input-group input-group-merge">
                        <input
                          type="password"
                          name="password"
                          class="form-control"
                          autoComplete="off"
                          data-toggle-password-input
                          placeholder="Your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          class="input-group-text px-4 text-secondary link-primary"
                          data-toggle-password
                        />
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* / .row */}
                <div class="form-check">
                  {/* Input */}
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="remember"
                  />
                  {/* Label */}
                  <label class="form-check-label" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <div class="row align-items-center text-center">
                  <div class="col-12">
                    {/* Button */}
                    <button
                      type="submit"
                      class="btn w-100 btn-primary mt-6 mb-2"
                    >
                      Login{" "}
                    </button>
                  </div>
                  <div class="col-12">
                    {/* Link */}
                    <small class="mb-0 text-muted">
                      Don't have an account yet?{" "}
                      <Link class="fw-semibold" to="/Signup">
                        <span>Sign up</span>
                      </Link>
                    </small>
                  </div>
                </div>{" "}
                {/* / .row */}
              </form>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer class="mt-auto">
          <div class="container-fluid mt-4 mb-6 text-muted">
            <div class="row justify-content-between">
              <div class="col">© TSM. 2025.</div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
