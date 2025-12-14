import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav
      id="mainNavbar"
      className="navbar navbar-vertical navbar-expand-lg scrollbar bg-dark navbar-dark"
    >
      <div className="container-fluid">
        {/* Brand */}
        <Link className="d-flex flex-column align-items-center" to="/dashboard">
          <img src="/logo.png" className="navbar-brand-img" alt="..." />
          <span className="text-white fw-bold fs-20">ADMIN</span>
        </Link>
        {/* Navbar toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidenavCollapse"
          aria-controls="sidenavCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Collapse */}
        <div className="collapse navbar-collapse" id="sidenavCollapse">
          {/* Navigation */}
          <ul className="navbar-nav mb-lg-7">
            <li className="nav-item w-100">
              <hr />
            </li>
            <li className="nav-item dropdown justify-content-between">
              <Link className="nav-link active mb-2" to="/dashboard">
                <span>Dashboards</span>
              </Link>
              <Link className="nav-link active mb-2" to="/category">
                <span>Category</span>
              </Link>
              <Link className="nav-link active mb-2" to="/product">
                <span>Product</span>
              </Link>
              <Link className="nav-link active mb-2" to="/Order">
                <span>Order</span>
              </Link>
              <Link className="nav-link active mb-2" to="/slider">
                <span>Slider</span>
              </Link>
              <Link className="nav-link active mb-2" to="/pincode">
                <span>Pincode</span>
              </Link>
              <Link className="nav-link active mb-2" to="/shipping">
                <span>Shipping</span>
              </Link>
            </li>
            <li className="nav-item w-100">
              <hr />
            </li>
          </ul>
          {/* End of Navigation */}
        </div>
        {/* End of Collapse */}
      </div>
    </nav>
  );
}
