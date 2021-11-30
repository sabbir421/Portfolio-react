import { Typography } from '@mui/material';
import Button from '@restart/ui/esm/Button';

import React from 'react';
import { Card } from 'react-bootstrap';

import bannar from '../../img/imgBannar.png'

const About = () => {
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
     
    Hi I'm Sabbir Al azim Shehab. My intellectual curiosity drives me to be a lifelong learner. As a curious tech learner,  <br/>

    In my everyday life, I try to love reading a book, write different things, helping people, and coding as well. I also think about different sorts of people. That basically inspires me as a different aspect.
     

    </Card.Text>
    <Typography variant='h3'>
        EDUCATION
    </Typography>
    <Typography variant='h6'>
    Daffodil International University-DIU 

    </Typography>
    <Typography variant='p'>
    Undergraduate, Computer Science and Engineering
2018 - 2022
    </Typography> <br/>

    <a href='https://drive.google.com/file/d/1Dwt743PIYl5pG4BF9pQlwdv6jpTq1gt7/view?usp=sharing'><Button
    className='btn btn-primary p-2 mt-2'
    >My Resume</Button></a>
   
  </Card.ImgOverlay>
</Card>
        </div>
    );
};

export default About;