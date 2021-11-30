import { Typography } from '@mui/material';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import bannar from '../../img/imgBannar.png'

const Bannar = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
  <Card.Img style={{height:'350px'}} src={bannar}alt="Card image" />
  <Card.ImgOverlay style={{marginTop:'0%'}}>
    
   <Typography variant='h5'>Hi I"m Sabbir al azim</Typography>
    <Typography variant='p'>
      junior react Developer
    </Typography>
    <Card.Text>
     
      
     

    </Card.Text>
    <NavLink to='/Contact'><Button variant="secondary">Contact Me</Button></NavLink>
  
  <a href="https://drive.google.com/file/d/1Dwt743PIYl5pG4BF9pQlwdv6jpTq1gt7/view?usp=sharing"  style={{color:'white',textDecoration:'none',marginLeft:'10px' }} target='blank'><Button variant="primary">Downlod My Resume</Button></a>
  </Card.ImgOverlay>
</Card>
        </div>
    );
};

export default Bannar;