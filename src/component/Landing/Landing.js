import React from "react";
import { NavLink } from "react-router-dom";
import "./Landing.css";
import LinkedIn from './img/linkedin.png'
import Facebook from './img/facebook.png'
import VideoHakaton from './img/videokocka3.mp4'
import Instagram from './img/instagram.png'
import Particles from "react-tsparticles";

const Landing = () => {
  return (
    <div className="homepage">
      <div className="sredisnji-deo">
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
            "particles": {
              "number": {
                "value": 160,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "edge",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": './img/LogoFH.png',
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0,
                  "sync": false
                }
              },
              "size": {
                "value": 5,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 4,
                  "size_min": 0.6,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 600
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "bubble"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 250,
                  "size": 0,
                  "duration": 2,
                  "opacity": 0,
                  "speed": 3
                },
                "repulse": {
                  "distance": 400,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }}
        />
      </div>
      <div className="text-obavestenje">
        <p>
        Udruženje studenata informatike FONIS održava FON Hakaton,
        48-časovno takmičenje za ljubitelje programiranja. 
        Okupite tim od tri ili četiri člana i učestvujte na drugoj online 
        iteraciji takmičenja koja će biti organizovana preko Google Meet platforme 
        9, 10. i 11. aprila. Prijave su otvorene do 21. marta u 23:59. 
        Radujemo se vašim prijavama!
                </p>
        <NavLink to="/prijava" id="prijavaDugme">
          <div className="dugme-ucestvuj">
            <b>UČESTVUJ</b>
          </div>
        </NavLink>

        <div className="dugmici-mreze">
          <a href="https://www.instagram.com/fonis_fon/">
            <img src={Instagram} alt="" />
          </a>
          <a href="https://web.facebook.com/fonis.rs/?_rdc=1_rdr">
            <img className="dugmic-drugi" src={Facebook} alt="" />
          </a>
          <a href="https://www.linkedin.com/company/fonis/">
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>

      <div className="desna-slika">
        <video width="auto" height="auto" autoPlay muted>
          <source src={VideoHakaton} type="video/mp4" />
        </video>

        <div className="slogan-hakaton">

          <div class="corner-ribbon bottom-left"><x-sign>
            USE YOUR CODE</x-sign></div>
          {/* <div class="corner-ribbon bottom-center"><x-sign>
        TO</x-sign></div> */}
          <div class="corner-ribbon bottom-right"><x-sign>
            TO CHANGE THE ROAD</x-sign></div>

        </div>

      </div>


    </div>
  )
}

export default Landing;
