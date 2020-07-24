import React from 'react';


function Banner() {
  return (
    <section id="banner">
      <div className="container">
          <div className="row">
              <div className="col-md-6">
                  <p className="promo-title">BEST ACADEMIC TUTORIALS</p>
                  <p>Subscribe Sokraacademy Youtube Channel to watch videos on academic Subjects,
                      Software Development and Stories </p>
                      <a href="#"><img src="./sokra-web/img/play.png" className="play-btn" alt="play"></img>Watch Tutorials</a>
              </div>
              <div className="col-md-6 text-center">
                  <img src="./sokra-web/img/degree.png" className="img-fluid" alt="degree"></img>
              </div>
          </div>
      </div>
      <img src="./sokra-web/img/wave.png" className="bottom-img" alt="wave"></img>
    </section>
  );
}

export default Banner;