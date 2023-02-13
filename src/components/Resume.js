import React from "react";
// import 'S.Davidson_Resume_2021';

const Resume = () => {
   
    const onButtonClick = () => {

        fetch('S.Davidson_Resume_2021.pdf').then(response => {
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
            <center>
                <p>To see my resume, please click below</p>
                <button id="resume" onClick={onButtonClick}>
                    Download Resume
                </button>
            </center>
        </>
    );
};

export default Resume;