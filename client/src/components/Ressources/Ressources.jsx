import React from 'react'
import './Ressources.css'

export default function Ressources() {
  return (
    <div className="resources-page">
      <h1>Resources for Sponsors and Seekers</h1>

      <div className="resource-section">
        <div className='res-title'>
          <span>For Sponsors</span>
        </div>

        <div className='res-body'>
          <p>Find valuable resources to help you maximize your sponsorship opportunities.</p>
          <ul>
            <li>
              <a href="#">Negotiating Sponsorships</a>
              <p>Learn effective negotiation strategies to secure the best deals for your brand.</p>
            </li>
            <li>
              <a href="#">Identifying Potential Seekers</a>
              <p>Discover how to find qualified candidates who align with your brand and goals.</p>
            </li>
            <li>
              <a href="#">Measuring Sponsorship ROI (Return on Investment)</a>
              <p>Access resources on measuring the effectiveness of sponsorships and tracking their impact.</p>
            </li>
          </ul>

            <div className="resource-links">
              <a href="#">Download a Sponsorship Negotiation Guide (PDF)</a>
              <a href="#">Watch a Webinar: Identifying Ideal Sponsorship Partners</a>
            </div>
        </div>

        
      </div>

      <div className="resource-section">
      <div className='res-title'>
          <span>For Seekers</span>
        </div>

        <div className='res-body'>
          <p>Attract sponsors and make the most of your sponsorship opportunities.</p>
          <ul>
            <li>
              <a href="#">Crafting a Winning Sponsorship Proposal</a>
              <p>Develop persuasive proposals that highlight your value proposition and attract sponsors.</p>
            </li>
            <li>
              <a href="#">Maximizing Sponsorship Benefits</a>
              <p>Learn how to effectively utilize sponsorship funds to achieve your project goals.</p>
            </li>
            <li>
              <a href="#">Reporting to Sponsors</a>
              <p>Get guidance on creating clear and concise reports to demonstrate the value you deliver to your sponsors.</p>
            </li>
          </ul>

            <div className="resource-links">
              <a href="#">Download a Sponsorship Proposal Template (Doc)</a>
              <a href="#">Read a Case Study: How a Startup Secured Sponsorship Success</a>
            </div>
        </div>
        
      </div>
    </div>
  )
}
