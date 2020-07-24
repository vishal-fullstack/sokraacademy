import React from 'react';


function Navbar() {
  return (
    <section className="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/home"><img src="http://localhost:3000/img/sokralogo.png"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
            <i className="fa fa-bars"></i>
            </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="#top">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#aboutus">About us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#footer">Contact Us</a>
            </li>
            </ul>
        </div>
        </nav>
    </section>
  );
}

export default Navbar;