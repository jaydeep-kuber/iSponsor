import React, { useState } from 'react'
import './Serv.css'
import { Link } from 'react-router-dom'
export default function Serv() {

  const [selectedTab, setSelectedTab] = useState('popular')
  const handleTabClick = (tab) => {
    setSelectedTab(tab)
  }

  return (
    <div className='serv-hero'>
      <div className='serv-top'>

        <div className='content'>
          <h1>iSponsor is a marketplace for finding and publishing event sponsorships.</h1>
          <h3>We make it easy to find and sponsor events to engage with your brand’s target audience</h3>
        </div>

        <div className='serv-top-btns'>
          <button className='serv-btns' onClick={()=>window.location.href="/registerEvent"}>Register your Event</button>
          <button className='serv-btns' onClick={()=>window.location.href="/registerSponsor"}>Register your Sponsorship</button>
        </div>
        
      </div>

      <div className="serv-center">

        <div className='serv-tabs'>
          <h2 className={`tab-links ${selectedTab === 'popular' ? 'active-link' : ''}`} onClick={() =>handleTabClick('popular')}>Most Popular</h2>

            <h2 className={`tab-links ${selectedTab === 'minuts' ? 'active-link' : ''}`} onClick={()=>handleTabClick('minuts')}>Last Minutes</h2>
            
            <h2 className={`tab-links ${selectedTab === 'near' ? 'active-link' : ''}`} onClick={()=>handleTabClick('near')}>Near You</h2>
        </div>

        {selectedTab === 'popular' && (
          <div className='serv-tab-content'  id='popular'>
            <div className='popular-container'>

              <div  className='popular-card'>
                <div className='popular-img'>
                  {/* image here */}
                </div>
                <div className='popular-text'>
                  <span>Thu, Jan 10 2024</span>
                  <h2> <Link to="/SponsorDetail" className='link'> Dragon & Keros </Link></h2>
                  <p>Starting at <span>$100</span></p>
                </div>
              </div>

              {/*  card 2 */}

              <div  className='popular-card'>
                <div className='popular-img'>
                  {/* image here */}
                </div>
                <div className='popular-text'>
                  <span>Mon, Jun 24 2024</span>
                  <h2> <Link to="/SponsorDetail" className='link'>B2B Groth Expo</Link></h2>
                  <p>Starting at <span>$150</span></p>
                </div>
              </div>

            </div>
          </div>
        )}

        {selectedTab === 'minuts' && (
          <div className='serv-tab-content'  id='minuts'>
            <div className='minuts-container'>
              <h2>You are finding at last minut that means you are engineer..!! </h2>
            </div>
          </div>
        )}

        {selectedTab === 'near' && (
          <div className='serv-tab-content'  id='near'>
            <div className='near-container'>            
              <h2>near you page is Under development :) </h2>
            </div>
          </div>
        )}

      </div>
    </div>
        
  )
}