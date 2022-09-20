import React from 'react'

function Contact() {

  const submitForm = (e) => {
    e.preventDefault();
    alert(`
      Name:  ${e.target.querySelector('#name').value}
      Surname:  ${e.target.querySelector('#surname').value}
      Mail:  ${e.target.querySelector('#email').value}
      Comment:  ${e.target.querySelector('#text').value}
    `)
    e.target.reset();
  }


  return (
    <div className="contact_page" id='contact'>
      <div className="vertical_head">
        <h1>
          Contact
        </h1>
      </div>
      <div className="contacts">
        <div className="touch">
          <form onSubmit={(e) => submitForm(e)}>
            <span className='line_span'>
              Get In Touch
            </span>
            <input type="text" className='form_item' id='name' placeholder='Name' />
            <input type="text" className='form_item' id='surname' placeholder='Surname'/>
            <input type="email" className='form_item' name="email" id="email" placeholder='E-mail'/>
            <textarea name="text" className='form_item' id="text" placeholder='Your message'></textarea>
            <div className="button">
              <button id='submit_btn'>
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.1789798585946!2d49.82203171525669!3d40.38272567936907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da6f327d463%3A0xbe68553e791e5e84!2sCoders%20Azerbaijan!5e0!3m2!1sru!2s!4v1663681680301!5m2!1sru!2s"
            style={{ border: 0, width: '100%', height: '100%' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact