import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/Tech.jpg"
          alt="Logo"
          style={{
            height: 50,
            width: 200,
            marginBottom: 10,
            display: "block",
          }}
        />
      </div>
      <nav className="nav">
        <div className="nav-item">
          <Link to="/Dashboard">Dashboard</Link>
        </div>
        <div className="nav-item">
          <Link to="/CustomerSegmentation">Customer Segmentation</Link>
        </div>
        <div className="nav-item">
          <Link to="/ProductPurchasePropensity">
            Product Purchase Propensity
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/RiskAnalysis">Risk Analysis</Link>
        </div>
        <div className="nav-item">
          <Link to="/SellingPrescriptiveAnalytics">
            Selling Prescriptive Analytics
          </Link>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
