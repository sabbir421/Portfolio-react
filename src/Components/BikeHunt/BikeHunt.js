import React from 'react';
import { Carousel } from 'react-bootstrap';
import bike1 from '../../img/bike.png'
import bike2 from '../../img/bike2.png'
import bike3 from '../../img/bike3.png'

const BikeHunt = () => {
   
  
    return (
        <div>
            <h1>Bike Hunt</h1>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bike1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bike2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bike3}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
            <h3 className='text-primary my-5'>Project Details</h3>
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
            <div className="p-3 border bg-light">Bootstrap</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">Talwind css</div>
          </div>
          
        </div>
        </div>
    );
};

export default BikeHunt;