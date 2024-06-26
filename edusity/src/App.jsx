import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Testimonials from "./components/Testimonials/Testimonials"
import Title from "./components/Title/Title"
import About from "./components/about/About"
import Campus from "./components/campus/Campus"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Programs from "./components/programs/Programs"
import VideoPlayer from "./components/videoPlayer/VideoPlayer"

const App = () => {
  const [play, setPlay]=useState(false)


  return (
    <div>
       <Navbar/>
       <Hero/>
       <div className="container">
        <Title subTitle='Our Program' title='What We Offer'/>
       <Programs/>
       <About setPlay={setPlay}/>
       <Title subTitle='Gallery' title='Campus Photos'/>
         <Campus/>
       <Title subTitle='Testimonials' title='What Students Says'/>
         <Testimonials/>
       <Title subTitle='Contact Us' title='Get In Touch'/>
        <Contact/>
        <Footer/>
       </div>
       <VideoPlayer play={play} setPlay={setPlay}/>
    </div>
  )
}

export default App
