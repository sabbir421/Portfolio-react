import React from 'react';
import { Carousel } from 'react-bootstrap';
import learn1 from '../../img/learnUp.png'
import learn2 from '../../img/learn2.png'
import learn3 from '../../img/learn3.png'

const LearnUp = () => {
   
  
    return (
        <div>
            <h1>Learn Up</h1>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={learn1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={learn2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={learn3}
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
         
        </div>
        </div>
    );
};

export default LearnUp;