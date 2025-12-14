import { Link } from "react-router-dom";

export default function AdminSignUp() {
  return (
    <main>
      {/* HEADER */}
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center vh-100">
          <div className="col-11 col-sm-8 col-md-6 col-lg-5 col-xl-4 col-xxl-3 py-6">
            {/* Title */}
            <h1 className="mb-2 text-center">Sign Up</h1>
            {/* Subtitle */}
            <p className="text-secondary text-center">
              Register to access to your account
            </p>
            {/* Form */}
            <form>
              <div className="row">
                <div className="col-12">
                  <div className="mb-4">
                    {/* Label */}
                    <label className="form-label">Full name</label>
                    {/* Input */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-4">
                    {/* Label */}
                    <label className="form-label">Email Address</label>
                    {/* Input */}
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email address"
                    />
                  </div>
                </div>
              </div>{" "}
              {/* / .row */}
              <div className="row">
                <div className="col-12">
                  <div className="mb-4">
                    {/* Label */}
                    <label className="form-label">Password</label>
                    {/* Input */}
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        className="form-control"
                        autoComplete="off"
                        data-toggle-password-input
                        placeholder="Your password"
                      />
                      <button
                        type="button"
                        className="input-group-text px-4 text-secondary link-primary"
                        data-toggle-password
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-4">
                    {/* Label */}
                    <label className="form-label">Confirm password</label>
                    {/* Input */}
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        className="form-control"
                        autoComplete="off"
                        data-toggle-password-input
                        placeholder="Your password again"
                      />
                      <button
                        type="button"
                        className="input-group-text px-4 text-secondary link-primary"
                        data-toggle-password
                      />
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* / .row */}
              <div className="form-check">
                {/* Input */}
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="agree"
                />
                {/* Label */}
                <label className="form-check-label" htmlFor="agree">
                  I agree with{" "}
                  <a href="javascript: void(0);">Terms &amp; Conditions</a> and
                  have understood
                  <a href="javascript: void(0);">Privacy Policy</a>
                </label>
              </div>
              <div className="row align-items-center text-center">
                <div className="col-12">
                  {/* Button */}
                  <button
                    type="button"
                    className="btn w-100 btn-primary mt-6 mb-2"
                  >
                    Get started
                  </button>
                </div>
                <div className="col-12">
                  {/* Link */}
                  <small className="mb-0 text-muted">
                    Already registered?{" "}
                    <a href="admin-signin.html" className="fw-semibold">
                      Login
                    </a>
                  </small>
                </div>
              </div>{" "}
              {/* / .row */}
            </form>
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
  );
}
