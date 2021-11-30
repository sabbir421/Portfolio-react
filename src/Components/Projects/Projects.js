import React from 'react';
import { Card, CardGroup,Button } from 'react-bootstrap';
import camera from '../../img/camera.png'
import tour from '../../img/tour.png'
import learn from '../../img/learnUp.png'
import bike from '../../img/bike.png'


const Projects = () => {
    return (
        <CardGroup className='container'>
  <Card>
    <Card.Img variant="top" src={learn} />
    <Card.Body>
      <Card.Title>Learn Up</Card.Title>
      <Card.Text>
        Learn Up is an online learning platform it's created for react, node js and firebase 
      </Card.Text>
      <Button variant="primary" className='width-100px'>project Details</Button>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src={tour} />
    <Card.Body>
      <Card.Title>Tour Guide</Card.Title>
      <Card.Text>
        Tour Guide is a Tour egency Platform this platform created for tpur Lovers
        this Site created by react,node js, firebase and mongoDB
      </Card.Text>
      <Button variant="primary" className='width-100px'>project Details</Button>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src={camera} />
    <Card.Body>
      <Card.Title>Camera World</Card.Title>
      <Card.Text>
        Camera World is an online camera shop for all camera lovers it's created by react, node js mongogDb,and firebase
      </Card.Text>
      <Button variant="primary" className='width-100px'>project Details</Button>
    </Card.Body>

    
  </Card>
  <Card>
    <Card.Img variant="top" src={bike} />
    <Card.Body>
      <Card.Title>Bike Hunt</Card.Title>
      <Card.Text>
        Bike Hunt is an online Bike Glary Pepole can see new Feature Bike from here and can get idea about marcket
        this site created by html, css, bottstrap, javaScript
      </Card.Text>
      <Button variant="primary" className='width-100px'>project Details</Button>
    </Card.Body>
   
  </Card>
</CardGroup>
        
    );
};

export default Projects;