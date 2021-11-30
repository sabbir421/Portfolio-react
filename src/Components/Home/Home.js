import React from 'react';
import Bannar from '../Bannar/Bannar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <h1 style={{color:'blue',marginTop:'15px', marginBottom:'15px' ,fontWeight:'600px'}}>My Recent Projects</h1>
            <Projects></Projects>
            <h1 style={{color:'blue',marginTop:'15px', marginBottom:'15px' ,fontWeight:'600px'}}>My Skills</h1>
            <Skills></Skills>
        </div>
    );
};

export default Home;