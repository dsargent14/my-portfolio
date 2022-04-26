import "./about.css"

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
           <div className="a-card bg "></div> 
           <div className="a-card">
               <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="a-img" />
               </div> 
            </div>
        <div className="a-right">
          <h1 className="a-title">About me</h1>
          <p className="a-sub">
            I am a Frontend UX/ UI Software Engineer proficient in most all front end technologies such as Javascript,CSS3, HTML5, Bootstrap, RestAPIs,
            React.js, and many more.
            </p>
            <p className="a-desc">
Feel free to check out my most recent projects, a few are shown below and upon clicking them you will be directed to my Github. 
            </p>
            <div className="a-award">

<div className="a-award-texts">
<h4 className="a-award-title">Education and Certifications</h4>
<p className="a-award-desc">
  I recieved my Associates Degree from College of the Siskiyous in Weed,California on May 2018 <br/>
  I completed my Frontend Software Development Certification from Kenzie Academy in Indianapolis,IN on November 2021
  </p>
</div>
            </div>
          </div>
        </div>
  )
}

export default About