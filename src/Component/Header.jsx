import React from "react";
import { useNavigate } from 'react-router-dom';
import ImageN from '../Asset/Nletter.jpeg'
import '../Style/Header.scss'
export default function Header() {
  const navigate = useNavigate()
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  d-flex justify-content-evenly align-items container-header">
        <div className="navbar-brand" onClick={()=>navigate('/')}>
          <img src={ImageN} alt="" />
          <p>ANOTIA</p>
        </div>
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
