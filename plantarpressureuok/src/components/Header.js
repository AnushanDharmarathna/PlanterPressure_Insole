import React from "react";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ background: "#73b2f5" }}
    >
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/interface1">
            PLANTAR PRESSURE MONITORING SYSTEM
          </a>
        </div>
        <div className="navbar-collapse collapse">
          {/* <ul className="nav navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pricing">
                Pricing
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
