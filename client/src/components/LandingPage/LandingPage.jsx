import React from 'react';
import './LandingPage.css';
import heroImage from './hero.jpg';
import  findImage  from "./find.jpg";
import commImage  from "./communicate.jpg";
import  collectImage from "./collect.jpg";
import { Link } from 'react-router-dom';
// Assuming your image is named hero.jpg


function LandingPage() {
  return (
    <div className="landing-page">
      <main className="main">

        <section className="hero" id="hero">

          <div className="hero-left">
            <h2 className="hero-h2">Bridging Opportunities Worldwide: <span>Sponsorship</span> Made Seamless.</h2>
            <p className="hero-text">Beautifully designed templates using React.js. Ant Design and Styled-Components! Save weeks of time and build your landing page in minutes.</p>

            <div className="hero-buttons">
              <Link to="/logins" className="button">Get Sponsor</Link>
              <Link to="/logins" className="button button-outlined">Become Sponsor</Link>
           </div> 
          </div>

          <div className='hero-right'>
            <img src={heroImage} alt="hero pic" />
          </div>
        </section>

        <section className='tips-section'>
          <div className='card-container'>
            <div className='tip-card'>
            <h3>Find</h3>
                <div className='tip-img'>
                 <img src={findImage} alt="find pic"/>
                </div>
                <p>
                  Reach out to the company on <b>social media</b> and engage in conversations. <b>
                  share your own work or ideas,</b>
                </p>
            </div>
            <div className='tip-card'>
                <h3>Communicate</h3>
                <div className='tip-img'>
                 <img src={commImage} alt="find pic"/>
                </div>
                <p>
                  Reach out to the company on <b>social media</b> and engage in conversations. <b>
                  share your own work or ideas,</b>
                </p>
                
            </div>
            <div className='tip-card'>
                <h3>Collect</h3>
                <div className='tip-img'>
                 <img src={collectImage} alt="find pic"/>
                </div>
                <p>Post your unique, custom sponsorship opportunities and <b> accept payment right on our platform.</b> </p>

            </div>
          </div>
          <div className='tip-learn'>
                <h3>
                    <span>
                        Collect tips from your fans and get sponsored by companies and brands..!
                    </span>
                </h3>
                <p>
                    <b>Looking For Sponsor</b> is dedicated to empowering content creators and sponsorship seekers of all kinds. Whether you're a YouTuber ready to turn your hobby into a side-hustle or a nonprofit looking for companies that sponsor events, we've got something to help you reach your goals.
                </p>
                <span>
                <a href="/Learn more" className="learn-btn button">Learn More</a>
                </span>
            </div>          
        </section>

        <section className='event-section'>
            <div className='event-div'>
                <h3>WHAT TYPE OF EVENTS ARE YOU LOOKING FOR?</h3>
                <div className='event-grid'>
                    <div className='grid-item'>
                        <h4>Tech Fest</h4>
                    </div>
                    <div className='grid-item'>
                        <h4>Concert</h4>
                    </div>
                    <div className='grid-item'>
                        <h4>Fashion Show</h4>
                    </div>
                    <div className='grid-item'>
                        <h4>Food Truck</h4>
                    </div>
                    <div className='grid-item'>
                        <h4>Sport Game</h4>
                    </div>
                    <div className='grid-item'>
                        <h4>Movie Screening</h4>
                    </div>
                </div>
                <span className='explore-btn button'>Explore More</span>
            </div>
        </section>
        
      </main>

    </div>
  );
}

export default LandingPage;
