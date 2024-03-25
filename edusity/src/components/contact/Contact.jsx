import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { useState } from 'react'


const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8c3a049c-a533-4d59-8e46-7ca61c8d4f09");
      
  
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
        event.target.reset();
      }
    };
  return (
    <div className='contact'>
       <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ullam a, dolore excepturi hic id eos rem expedita non quis, sit, odio earum repellendus aliquam sapiente deleniti voluptate soluta. Quia?

        </p>
        <ul>
            <li><img src={mail_icon} alt="" /> Contact@admission.co</li>
            <li><img src={phone_icon} alt="" /> +1800-180-3433</li>
            <li><img src={location_icon} alt="" /> Ft-654D , Mumbai , India</li>


        </ul>
       </div>

       <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your phone number' required />
            <label>Write your message here</label>
            <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /> </button>  
        </form>
        <span>{result}</span>
       </div>

    </div>
  )
}

export default Contact



