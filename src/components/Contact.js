// import React, { useState } from 'react';


// function ContactForm() {

//   const [ContactName, setContactName] = useState('');
//   const [ContactEmail, setContactEmail] = useState('');
//   const [ContactMessage, setContactMessage] = useState('');

// //   const handleInputChange = (e) => {
// //     // Getting the value and name of the input which triggered the change
// //     const { name, value } = e.target;

// //     // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
// //     return name === 'firstName' ? setFirstName(value) : setLastName(value);
// //   };

//   const handleFormSubmit = (e) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     e.preventDefault();

//     // Alert the user their first and last name, clear the inputs
//     // alert(`Hello ${firstName} ${lastName}`);
//     // setFirstName('');
//     // setLastName('');
//   };

//   return (
//     <div>
//       <form className="form">
//         <input
//           value={ContactName}
//           name="ContactName"
//           onChange={handleFormSubmit}
//           type="text"
//           placeholder="Name"
//         />
//         <input
//           value={ContactEmail}
//           name="ContactEmail"
//           onChange={handleFormSubmit}
//           type="text"
//           placeholder="Email address"
//         />
//         <input
//           value={ContactMessage}
//           name="ContactMessage"
//           onChange={handleFormSubmit}
//           type="text"
//           placeholder="Message"
//         />
//         <button type="button" onClick={handleFormSubmit}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;
