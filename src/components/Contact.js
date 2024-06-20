import React from 'react';
import emailjs from 'emailjs-com';
import '../style/Contact.css';


export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_vj1r2qy', e.target, 'user_27uUdjPhwH9P0Nd1lUDmS')
      .then((result) => {
          document.getElementById('my-form').reset();
          window.alert("Thank you for your interest. I'll respond as soon as possible.");
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" id='my-form' onSubmit={sendEmail}>
      <div id='form-inputs'>
        <input type="hidden" name="contact_number" />
        <div className='form-item'>
          <label htmlFor="full-name">Name</label>
          <input type="text" name="from_name" id="full-name" required/>
        </div>
        <div className='form-item'>
          <label htmlFor="main-email">Email</label>
          <input type="email" name="from_email" id="main-email" required/>
        </div>
        <div className='form-item'>
          <label htmlFor="main-message">Message</label>
          <textarea name="message" id="main-message" required/>
        </div>
      </div>
      <button type='submit' value='Send' id='launch' display='hidden'>Submit</button>
    </form>
  );

}




