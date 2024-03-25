import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better Education for a coding and Techonology</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores repellendus fugiat corporis possimus eligendi? Quisquam excepturi obcaecati quasi fugiat placeat quam ex ab, est in. Nisi earum maxime quae ducimus?</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="arrow" /> </button>
      </div>
    </div>
  )
}

export default Hero
