import React, {useState} from "react";
import "./Personalportfolio.css";
import Logo from "./logoM.png";
import em from "./LogoE.png";
import git from "./LogoG.png";
import ln from "./LogoL.png";

const Homepp = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

    return(
        <div>
            <a href="http://localhost:3000/"><img className="logo" src={Logo} alt="Logo"/></a>
            <a href='mailto:"manisaradhi8194@gmail.com"'><img className="logoe" src={em} alt="email"/></a>
            <a href="https://github.com/Manisaradhi"><img className="logog" src={git} alt="github"/></a>
            <a href="https://www.linkedin.com/in/manisaradhi-mandala-791177197/"><img className="logol" src={ln} alt="email"/></a>
            <p data-text="WELCOME" className="dis" >WELCOME</p>
            <p className="txt" >I'm <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Manisaradhi Mandala</span>,a Full Stack Java Developer.I've got skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, Java, python, C, C++), Database Management Systems (MySQL, SQL SERVER).<br/><br/>
            I'm a full stack developer who is very passionate about coding and problem solving and building softwares.</p>
            <div className={`slider ${isHovered ? 'active' : ''}`}>
            </div>
            <p className="proj" data-text="Projects">Projects</p>
            <ul>
              <li><a className="p1" href="https://github.com/Manisaradhi/A-Lightweight-Secure-Data-Sharing-Scheme-for-Mobile-Cloud-Computing">A Lightweight Secure Data Sharing Scheme for Mobile Cloud Computing</a></li>
              <li><a className="p2" href="https://github.com/Manisaradhi/Train-tickets-booking-system">Train tickets booking system</a></li>
              <li><a className="p3" href="">Personal Portfolio</a></li>
            </ul>
        </div>
    )
}

export default Homepp;