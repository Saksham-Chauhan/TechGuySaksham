import React from 'react';
import All from './All';
import im from './img/about.jpg';

const About = () => {
    return (
        <>
           <All 
                heading="Welcome to About page"
                subheading="Contact us now."
                imgsrc={im}
                visit="/contact"
                btn="Contact Now"
            />
        </>
    );
}

export default About;
