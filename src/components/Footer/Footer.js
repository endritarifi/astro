import React from 'react';

function Footer() {
  return (
    
<footer className="text-center text-lg-start text-muted footer">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 ">
          <div className="me-5 d-none d-lg-block">
            <span className='text-white'>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="https://www.facebook.com/AstronomyClubKosova/" className="me-4 text-reset ">
              <i className="fab fa-facebook-f text-white" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-twitter text-white" />
            </a>
            <a href="https://www.instagram.com/astroclubkosova/" className="me-4 text-reset">
              <i className="fab fa-instagram text-white" />
            </a>
          </div>
        </section>
        <section className>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className='text-white'>Astro Club Kosova</i></h6>
                <p className='text-white'>
                Astro Club Kosova is an astronomy club founded in March 2014 in Kosovo. The club aims to promote astronomy 
                and space science among the general public through various activities such as observing sessions, public lectures, workshops, 
                and other educational events.</p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 text-white">
                  Useful links
                </h6>
                <p className='text-white'>
                  <a href="#!" className="text-reset">Home</a>
                </p>
                <p className='text-white'>
                  <a href="#!" className="text-reset">News</a>
                </p>
                <p className='text-white'>
                  <a href="#!" className="text-reset">About Us</a>
                </p>
                <p className='text-white'>
                  <a href="#!" className="text-reset">Contact</a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4 text-white">
                  Contact
                </h6>
                <p className='text-white'><i className="fas fa-home me-3 text-white" /> Shaban Dhe Sami Ukshini Gjilan </p>
                <p className='text-white'>
                  <i className="fas fa-envelope me-3 text-white" />
                  arifiendrit4@gmail.com
                </p>
                <p className='text-white'><i className="fas fa-phone me-3 text-white" /> +383 45 664 193</p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4 text-white">
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://www.facebook.com/fuqiabashkimitrinor">Astro Club Kosova</a>
        </div>
      </footer>

  );
}

export default Footer;
