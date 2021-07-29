import React from 'react';

const Footer = () => {
    const y= new Date().getFullYear();
    return(
        <>
        <footer className="w-100 bg-dark text-center">
            <p>© {y} TechGuySaksham. All Rights Reserved | Terms and Conditions.</p>
        </footer>
        </>
    );
}

export default Footer;