import {navBar, Container, Navbar} from "react-bootstrap"
import { useState, useEffect } from "react"
export const navBar = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scolled, setScrolled] =useState(false);

        useEffect(() =>{
            const onScroll =() =>{
                if(window.scrollY > 50){
                    setScrolled(true);
                }else{
                    setScrolled(false);
                }
            } 
            window.addEventListener("scroll", onScroll);

            return() => window.removeEventListener("scroll", onScroll);
        }, [])


return(
        <navBar expand="lg" className∑>
            <Container>
            <navBar.brand href="#home">
                <img src={''} alt="Logo"/>
                </navBar.brand>
            
            <navBar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            </navBar.Toggle>
            <navBar.Collapse id="basic-navbar-nav">
                <nav.link href="#home">Home</nav.link>
                <nav.link href="#link">Skills</nav.link>
                <nav.link href="#Projects">Projects</nav.link>
            </navBar.Collapse>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src={} alt=""/></a>
                    <a href="#"><img src={} alt=""/></a>
                    <a href="#"><img src={} alt=""/></a>
                </div>
                <button className="vdd" onClick= {() =>console.log('connect')}><span>Let's Connect</span> </button>
            </span>
            </Container>
        </navBar>
)
}