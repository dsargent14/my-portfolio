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
                <h1 className="c-title">Lets disscus projects</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src="" alt="" className="c-icon"/>
                        +1 317-737-9349
                        </div>
                        <div className="c-info-item">
                        <img src="" alt="" className="c-icon"/>
                        SargentDwight@yahoo.com
                        </div>
                        <div className="c-info-item">
                        <img src="" alt="" className="c-icon"/>
                        Inddianapolis,IN
                        </div>
                    </div>
                </div>
            <div className="c-right">
                 
                    <p className="c-desc">
                    <b>put story here</b>
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