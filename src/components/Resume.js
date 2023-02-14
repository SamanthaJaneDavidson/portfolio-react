import React from "react";
import resume from '../images/S.Davidson_Resume_2021.pdf';

const Resume = () => {
   
    return (
        <>
            <center>
                <p>To see my resume, please click below</p>

                <a href={resume} download>Download</a>
        
            </center>
        </>
    );
};

export default Resume;