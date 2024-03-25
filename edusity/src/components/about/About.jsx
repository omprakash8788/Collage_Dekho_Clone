import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>

      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Tomorrow Leaders Today</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste exercitationem cupiditate sint odit harum modi vitae quisquam, voluptates numquam quam.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste exercitationem cupiditate sint odit harum modi vitae quisquam, voluptates numquam quam.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste exercitationem cupiditate sint odit harum modi vitae quisquam, voluptates numquam quam.</p>
      </div>
    </div>
  )
}

export default About
