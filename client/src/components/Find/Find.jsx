import React from 'react'
import './Find.css'
export default function Find() {
  return (
    <div className='find-hero'>
      <div className='find-recent'>
        <div className='resent-container'>
          <h2>Recent Offer</h2>
        <div className='recent-item'>
          <span>EasyClosets</span>
          <p>duration of 90 days</p>
          <h3>How you get paid: 4% commission for new customer purchases, 2% commission for returning customer purchases
          </h3>
          <div className='find-btns'>
            <button className='find-btn' id='visit'>Visit</button>
            <button className='find-btn' id='more'>More Info</button>
          </div>
        </div>

        </div>
      </div>
      <div className='find-container'>
        <h2>Previos month offers</h2>
        <div className='find-item'>
          <span>Madison Reed</span>
          <p>duration of 30 days</p>
          <h3>How you get paid: Up to $25 per order for new customers and up to $5 per order for returning customers
          </h3>
          <div className='find-btns'>
            <button className='find-btn' id='visit'>Visit</button>
            <button className='find-btn' id='more'>More Info</button>
          </div>
        </div> 

        <div className='find-item'>
          <span>Healthy Junk Food</span>
          <p>duration of 45 days</p>
          <h3>How you get paid: 5% commission on all sales
          </h3>
          <div className='find-btns'>
            <button className='find-btn' id='visit'>Visit</button>
            <button className='find-btn' id='more'>More Info</button>
          </div>
        </div>

        <div className='find-item'>
          <span>Tea</span>
          <p>duration of 30 days</p>
          <h3>How you get paid: 8% commission on all sales
          </h3>
          <div className='find-btns'>
            <button className='find-btn' id='visit'>Visit</button>
            <button className='find-btn' id='more'>More Info</button>
          </div>
        </div>

        <div className='find-item'>
          <span>Streamer Art Company</span>
          <p>duration of 90 days</p>
          <h3>How you get paid: 20% commission on all sales
          </h3>
          <div className='find-btns'>
            <button className='find-btn' id='visit'>Visit</button>
            <button className='find-btn' id='more'>More Info</button>
          </div>
        </div>
      </div>

      <div className='show-more'>
        <button className='show-more-btn' id='show-more'>Load More</button>
      </div>
    </div>
  )
}
