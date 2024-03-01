import React, { useState, useEffect } from 'react'
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
    const[showScrollTopButton,setShowSrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setShowSrollTopButton(true);
            }
            else{
                setShowSrollTopButton(false);
            }
        });
        
    },[])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {showScrollTopButton && <FaAngleDoubleUp className='top-btn-position' onClick={scrollTop} />}
        </div>
    );
};

export default ScrollToTop