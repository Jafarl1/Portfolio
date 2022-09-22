import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import ClipLoader  from "react-spinners/ClipLoader";


function Contact() {

  const form = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    let lens = [];
    let info = e.target.querySelectorAll('.form_item');
    info.forEach(a => {
      lens.push(a.value.length)
    });

    if (lens.includes(0)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all fields!'
      });
      info.forEach(a => {
        if (a.value.length === 0) {
          a.classList.add('emptyField')
        }
      });
    }
    else {
      emailjs.sendForm('service_eqbulxg', 'template_5aem7vc', form.current, 'd8aUAvJgyEbxROVd2')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your message has been sent to Zohrab!',
      })
      e.target.reset();
    }
  };

  const checkValue = (e) => {
    if (e.target.value.length < 1) {
      e.target.classList.add('emptyField');
    }
    else {
      e.target.classList.remove('emptyField');
    }
  };

  const [playAnimation, setPlayAnimation] = useState(false);
  useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(true);
    };
    if (document.readyState === "complete") {
      onPageLoad();
    }
    else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);


  return (
    <div className="contact_page" id='contact'>
      <div className="vertical_head">
        <h1>
          Contact
        </h1>
      </div>
      <div className="contacts">
        <div className="touch">
          <form ref={form} onSubmit={(e) => submitForm(e)}>
            <span className='line_span'>
              Get In Touch
            </span>
            <input type="text" className='form_item' name='name' placeholder='Name Surname' onChange={(e) => checkValue(e)} />
            <input type="text" className='form_item' name='subject' placeholder='Subject' onChange={(e) => checkValue(e)} />
            <input type="email" className='form_item' name="email" placeholder='E-mail' onChange={(e) => checkValue(e)} />
            <textarea className='form_item' name="text" placeholder='Your message' onChange={(e) => checkValue(e)}></textarea>
            <div className="button">
              <button id='submit_btn'>
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="map">
          {
            !playAnimation ?
              <div className="loader">
                <ClipLoader
                  color="#ffb100"
                  size={70}
                />
              </div>
              :
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.1789798585946!2d49.82203171525669!3d40.38272567936907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da6f327d463%3A0xbe68553e791e5e84!2sCoders%20Azerbaijan!5e0!3m2!1sru!2s!4v1663681680301!5m2!1sru!2s"
                style={{ border: 0, width: '100%', height: '100%' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
          }
        </div>
      </div>
    </div>
  )
}

export default Contact