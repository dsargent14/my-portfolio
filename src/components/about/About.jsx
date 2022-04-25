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
            Put your personal info here talk about what makes you reat
            </p>
            <p className="a-desc">
More details about you
            </p>
            <div className="a-award">
<img src="" alt="30 min mark on vid" className="a-award-img"/>
<div className="a-award-texts">
<h4 className="a-award-title">certicatios here</h4>
<p className="a-award-desc">
  tell where and when you received cert
  </p>
</div>
            </div>
          </div>
        </div>
  )
}

export default About