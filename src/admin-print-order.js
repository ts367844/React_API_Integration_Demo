import { Link } from "react-router-dom";

export default function AdminPrintOrder() {
  return (
    <div>
      <main>
        {/* HEADER */}
        <div className="container-fluid">
          <main className="content">
            <div className="container-fluid">
              <p align="center">
                <button className="btn btn-primary" onclick="window.print();">
                  Print
                </button>
                {/* <a href="admin-view-order-detail.html" class="btn btn-secondary">Cancel</a> */}
              </p>
              <hr />
              <table align="center" border={2} cellPadding={10} width="70%">
                <tbody>
                  <tr>
                    <td width="25%">Fullname</td>
                    <td width="25%" />
                    <td width="25%">No of items</td>
                    <td width="25%" />
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td />
                    <td>Date</td>
                    <td />
                  </tr>
                  <tr>
                    <td>City</td>
                    <td />
                    <td>Payment mode</td>
                    <td />
                  </tr>
                  <tr>
                    <td>Pincode</td>
                    <td />
                    <td>Amount</td>
                    <td />
                  </tr>
                  <tr>
                    <td>Mobile</td>
                    <td />
                    <td>Remarks</td>
                    <td />
                  </tr>
                </tbody>
              </table>
              <h2 align="center">Item Detail</h2>
              <table align="center" border={2} cellPadding={10} width="70%">
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
          </main>
        </div>
      </main>
    </div>
  );
}
