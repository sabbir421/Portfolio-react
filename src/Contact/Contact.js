import React from 'react';

import emailjs from 'emailjs-com'
const Contact = () => {
    function sendEmail(e){
        
        emailjs.sendForm(
        'service_ty5pf3s',
        'template_vly71gf',
        e.target,
        'user_pytCs41qrQDP1dY44TWH3').then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
        e.preventdefault()
    }
    return (
        <div className='container'
            
        style={{marginTop:'50px',width:'60%',backgroundColor:'blue'}}>
             <h1>Send me Message</h1>
            <form className='row' onSubmit={sendEmail} style={{margin:'25px,85px,75px,100px'}} >
            <input  type='text' name='name' placeholder='Your name'/> <br/>
            <input type='text' name='email' placeholder='Your email'/><br/>
            <textarea type='text' name='message' placeholder='Your text'/><br/>
            <input type='submit' value='send' />
            </form>
        </div>
    );
};

export default Contact;