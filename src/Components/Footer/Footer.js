
import { Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark mt-5 p-5'>
            <div class="container px-4">
  <div class="row gx-5">
    <div class="col">
     <h3 className='text-white'>MY Address</h3>
      <h6 className='text-white'> Dhaka, bangladesh</h6> <br/>
      <Typography className='text-white'>Ashulia , Daffodil Smart City</Typography>


    </div>
    <div class="col">
      <h3 className='text-white'>Contact</h3>
       <h6 className='text-white'>phone: 01713915801</h6>
       <h6 className='text-white'>email: sabbiralazim421@gmail.com</h6>
       <a href='https://www.facebook.com/sabbir.alazim' target='blank'>Facebook</a>
       <a href='https://www.linkedin.com/in/sabbir-al-azim-shehab-a0253014b/' target='blank' style={{marginLeft:'5px'}}>Linkedin</a>
       
    </div>
  </div>
</div>
        </div>
    );
};

export default Footer;