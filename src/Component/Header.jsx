import React, { Component } from "react";

export default function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center align-items">
        <a class="navbar-brand" href="#">
          NANOTIA
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                News
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Jobs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Database
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Event
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                School
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Advertise
              </a>
            </li>
          </ul>
      </nav>
    </>
  );
}
