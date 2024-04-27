import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
 
function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "316de7e0-c9b2-4f00-b435-24c1fedb78b8");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon}alt="" /> </h3>
            <p>feel free to reach out through contact from or find our contact
                information below . Your feedback , questions , and suggestions are 
                important to us as we strive to provide exceptional service to our
                 university community.

            </p>
            <ul>
                <li> <img src={mail_icon} alt="" />Contact@gmail.com</li>
                <li><img src={phone_icon} alt="" />+1 23457896543</li>
                <li><img src={location} alt="" />77 Massachusetts Ave, Cabridge <br/> MA 02139, united state</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit} >
                <label >Enter your name :</label>
                <input type='text' name='name' placeholder='enter your name ...' required />
                <label>Enter your phone number</label>
                <input type='tel' name='phone' placeholder='enter your phone number' required />
                <label>Write your message here : </label>
                <textarea name="message"  rows="6" placeholder='enter your message here'required></textarea>
                <button type="submit"className='btn dark-btn'>submit now <img src={white_arrow}alt="" /></button>
            </form>
            <span >{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
