import { useRef, useState } from "react"
import "./contact.css"
import emailjs from '@emailjs/browser'
//add phone email and adress  icon to img tag




const Contact = ()  =>{
    const formRef =useRef()
const [done,setDone] =useState(false)
const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
    .sendForm('service_z3rf4lq', 'template_76dsx3c', formRef.current, 'wFDo5-LOUb0kTT6Z_')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });

}

  return (
    <div className="c">
        <div className="c-bg"> </div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's Discuss Projects</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <h3  className="c-icon">
                       Mobile : +13177379349
                        </h3>
                        </div>
                        
                        <div className="c-info-item">
                        <h3  className="c-icon">
                       Email: SargentDwight@yahoo.com
                        </h3>
                        <br/>
                        </div>
                        <div className="c-info-item">
                        <h3  className="c-icon">
                       Location : Indianapolis,IN USA
                       </h3>
                        </div>
                    </div>
                </div>
            <div className="c-right">
                 
                    <p className="c-desc">
                    <b>Contact Me</b> <br/>
                    Please reach out always looking to freelance and learn along the way 
                    </p>
                    <form ref={formRef} onSubmit ={handleSubmit}>
                <input type="text" placeholder="Name" name="user_name"/>
                <input type="text" placeholder="Subject" name="user_subject"/>
                <input type="text" placeholder="Email" name="user_email"/>
                    <textarea placeholder="Message" rows="5" name="message"></textarea>
                   <button>Submit</button>
                   {done && "good looks"}
                    </form>

                </div>
           </div>
        </div>
  )
}

export default Contact