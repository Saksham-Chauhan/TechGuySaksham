import React from 'react';
import All from './All'
import im from './img/omg.webp';

const Home = () => {
    return (
        <>
            <All 
                heading="Grow your business with us"
                subheading="we are the team of talented developer making websites."
                visit="/services"
                btn="Get Startrd"
                imgsrc={im}
            />
        </>
    );
}

export default Home;
