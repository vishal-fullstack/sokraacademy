import React from 'react';


function Footer() {
  return (
   <section id="footer">
       <img src="./img/wave2.png" className="footer-img"></img>
       <div className="container">
           <div className="row">
               <div className="col-md-4 footer-box">
               <img src="http://localhost:3000/img/sokralogo.png"/>
               <p>Subscribe Sokraacademy Youtube Channel to watch videos on academic Subjects,
                      Software Development and Stories </p>
               </div>
               <div className="col-md-4 footer-box">
                <p><b>CONTACT US</b></p>
                <p><i className="fa fa-map-marker"></i>Sakinaka, Andheri</p>
                <p><i className="fa fa-phone"></i>022- 123456</p>
                <p><i className="fa fa-envelope"></i>Sokraacademy@gmail.com</p>
               </div>
               <div className="col-md-4 footer-box">
                <p><b>SUBSCRIBE NEWSLETTER</b></p>
                <input type="email" className="form-control" placeholder="Your Email"></input>
                <button type="button" className="btn btn-primary">Subscribe</button>
               </div>
           </div>
           <hr />
           <p className="terms"> <a href="#">Terms and Conditions</a></p>
       </div>
   </section>
  );
}

export default Footer;