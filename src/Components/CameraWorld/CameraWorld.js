import React from 'react';
import { Carousel } from 'react-bootstrap';
import camera1 from '../../img/camera.png'
import camera2 from '../../img/camera2.png'
import camera3 from '../../img/camera3.png'

const CameraWorld = () => {
   
  
    return (
        <div>
            <h1>Camera World</h1>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={camera1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={camera2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={camera3}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
            <h3 className='my-5 text-primary'>Project Details</h3>
            <p>
                <li>
                    <ul> This Site Created for Learner</ul>
                    <ul> User can login and register</ul>
                    <ul> User can enroll course</ul>
                    <ul>User can see our all projects</ul>
                </li>
                
               
            </p>
            <h3 className='my-5 text-primary'>Uses Tecnology</h3>
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
            <div className="p-3 border bg-light">Matrial UI</div>
          </div>
        </div>
        </div>
    );
};

export default CameraWorld;