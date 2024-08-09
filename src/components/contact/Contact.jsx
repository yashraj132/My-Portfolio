import React, {useState} from 'react'
import './contact.css';

export const Contact = () => {
  
const [contact, setContact] = useState({
  username: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});


const handleInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;

  setContact({
    ...contact,
    [name]: value,
  });
}


  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Ask Me Anything</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's Discuss</h3>
          <p className="contact_details">Connect with me. I would love to hear from you.</p>
        </div>

        <form action="https://api.web3forms.com/submit" method="POST" className="contact_form">
          <div className="contact_form-group">
            <input type="hidden" name="access_key" value="47ca684f-c3f7-44b9-8736-83b053a7466a"/>
            <div className="contact_form-div">
              <input type="text" name="username" id="username" value={contact.username} onChange={handleInput} className="contact_form-input" placeholder='Write your name' required/>
            </div>

            <div className="contact_form-div">
              <input type="number" name="phone" id="phone" value={contact.phone} onChange={handleInput} className="contact_form-input" placeholder='Write your mobile number' required/>
            </div>
            </div>
            <div className="contact_form-div">
              <input type="email" name="email" id="email" value={contact.email} onChange={handleInput} className="contact_form-input" placeholder='Write your email' required/>
            </div>
          <div className="contact_form-div">
            <input type="text" name="subject" id="subject" value={contact.subject} onChange={handleInput} className="contact_form-input" placeholder='Write your topic' required/>
          </div>

          <div className="contact_form-div contact_form-area">
            <textarea name="message" id="message" value={contact.message} onChange={handleInput} cols="30" rows="10" className='contact_form-input' placeholder='Write your message here.' required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
