import React from 'react'
import style from '../css/carousel.module.css'
function Carousel() {
  return (
    <div>
        <div className={`${style.carousel}`}>
              <div id="carouselExampleCaptions" className={`carousel slide ${style.carousel1} `}>
        
                  <div className={`carousel-inner ${style.carouselinner} `} >
                  <div className="carousel-item active">
                          <img src="child.jpg" className={`d-block w-100 ${style.carouselImg}`} alt="img"/>
                          <div className="carousel-caption d-none d-md-block">
                              <h5 className='fs-5 text-dark'>First slide label</h5>
                              <p className='fs-6 text-dark'>Some representative placeholder content for the first slide.</p>
                          </div>
                  </div>
                  <div className="carousel-item">
                          <img src="child.jpg" className={`d-block w-100 ${style.carouselImg}`} alt="img"/>
                          <div className="carousel-caption d-none d-md-block">
                              <h5 className='fs-5 text-dark'>Second slide label</h5>
                              <p className='fs-6 text-dark'>Some representative placeholder content for the second slide.</p>
                          </div>
                  </div>
                  <div className="carousel-item">
                          <img src="child.jpg" className={`d-block w-100 ${style.carouselImg}`} alt="img"/>
                          <div className="carousel-caption d-none d-md-block">
                              <h5 className='fs-5 text-dark'>Third slide label</h5>
                              <p className='fs-6 text-dark'>Some representative placeholder content for the third slide.</p>
                          </div>
                  </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
              </button>
          </div>
          </div>
    </div>
  )
}

export default Carousel