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
                      <a href="#"><img src="http://localhost:3000/img/play.png" className="play-btn"></img>Watch Tutorials</a>
              </div>
              <div className="col-md-6 text-center">
                  <img src="http://localhost:3000/img/degree.png" className="img-fluid"></img>
              </div>
          </div>
      </div>
      <img src="http://localhost:3000/img/wave.png" className="bottom-img"></img>
    </section>
  );
}

export default Banner;