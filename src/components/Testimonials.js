import React from 'react';


function Testimonials() {
  return (
    <section id="testimonials">
        <div className="container">
            <h1 className="title text-center">WHAT CLIENTS SAY</h1>
            <div className="row offset-1">
                <div className="col-md-5 testimonials">
                <p>Subscribe Sokraacademy Youtube Channel to watch videos on academic Subjects,
                      Software Development and Stories 
                </p>
                <img src="./img/avataaars.svg"></img>
                <p className="user-details"><b>Rajesh</b><br />Co-founder at xyz</p>
                </div>
                <div className="col-md-5 testimonials">
                <p>Subscribe Sokraacademy Youtube Channel to watch videos on academic Subjects,
                      Software Development and Stories 
                </p>
                <img src="./img/avataaars.svg"></img>
                <p className="user-details"><b>Akash</b><br />Counceler at abc</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Testimonials;
