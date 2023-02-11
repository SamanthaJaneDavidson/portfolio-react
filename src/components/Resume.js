import React from "react";

const Resume = () => {
  
 
    const onButtonClick = () => {

        fetch('./images/S.Davidson_Resume_2021.pdf').then(response => {
            response.blob().then(blob => {

                const fileURL = window.URL.createObjectURL(blob);
  
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'S.Davidson_Resume_2021.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <left>
                <h3>To see my resume, please click below</h3>
                <button onClick={onButtonClick}>
                    Download Resume
                </button>
            </left>
        </>
    );
};

export default Resume;