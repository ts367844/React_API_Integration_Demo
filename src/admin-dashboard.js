import Menu from "./menu";
import { ToastContainer } from "react-toastify";

export default function AdminDashboard() {
  return (
    <div class="wrapper">
      <Menu />
      <main>
        <ToastContainer />
        {/* HEADER */}
        <div class="container-fluid">
          <div class="card border-0 ">
            <div class="h2 bg-dark text-white p-2 mb-4 card">
              <h2 class="h3 mb-0">Dashboard</h2>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer class="mt-auto">
          <div class="container-fluid mt-4 mb-6 text-muted">
            <div class="row justify-content-between">
              <div class="col">
                <a
                  href="https://www.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  © TSM. 2025.
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
