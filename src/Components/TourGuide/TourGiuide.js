import React from 'react';
import { Carousel } from 'react-bootstrap';
import tour1 from '../../img/tour.png'
import tour2 from '../../img/tour2.png'
import tour3 from '../../img/tour3.png'

const TourGiuide = () => {
   
  
    return (
        <div>
            <h1>Tour Guide</h1>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={tour1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={tour2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={tour3}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
            <h3 className='text-primary my-5'>Tour Guide</h3>
            <li>
                    <ul> This Site Created for Learner</ul>
                    <ul> User can login and register</ul>
                    <ul> User can enroll course</ul>
                    <ul>User can see our all projects</ul>
                </li>
                
            <h3 className='text-primary my-5'>Uses Tecnology</h3>
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div className="col">
            <div className="p-3 border bg-light">HTML5</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">CSS3</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">JavaScript</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">React</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">Nodejs</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">MongoDB</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">firebase</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">Express</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">React Router </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">React Bootstrap</div>
          </div>
        </div>
        </div>
    );
};

export default TourGiuide;