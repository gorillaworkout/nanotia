import React from "react";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center align-items">
        <a className="navbar-brand" href="#">
          NANOTIA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Jobs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Database
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Event
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                School
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Advertise
              </a>
            </li>
          </ul>
      </nav>
    </>
  );
}
