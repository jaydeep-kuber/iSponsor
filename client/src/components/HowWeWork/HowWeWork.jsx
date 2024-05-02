import React from 'react'
import './HowWeWork.css'
export default function HowWeWork() {
  return (
    <div className="how-we-work">
    <h1>How iSponsor Works</h1>
    <div className="steps-container">
      <h2>The Sponsorship Process</h2>
      <ul className="steps">
        <li className='step-item'>
          <span className="step-icon">&#128100;</span>
          <h4>Seekers Create a Profile</h4>
          <p>Showcase your project/event details, target audience, and sponsorship needs.</p>
        </li>
        <li>
          <span className="step-icon">&#128188;</span>
          <h4>Sponsors Browse Seekers</h4>
          <p>Search for potential partnerships based on industry, location, or other criteria.</p>
        </li>
        <li>
          <span className="step-icon">&#128220;</span>
          <h4>Seekers Propose Sponsorships</h4>
          <p>Contact sponsors directly with tailored proposals highlighting your value proposition.</p>
        </li>
        <li>
          <span className="step-icon">&#128196;</span>
          <h4>Sponsors Review Proposals</h4>
          <p>Evaluate proposals and select suitable partnerships that align with their goals.</p>
        </li>
        <li>
          <span className="step-icon">&#128184;</span>
          <h4>Secure Funding and Track Progress</h4>
          <p>Securely exchange funds and track project progress through the platform (if applicable).</p>
        </li>
      </ul>
    </div>
    <div className="benefits">
      <h2>Benefits for Sponsors</h2>
      <ul>
        <li>Efficient sponsor discovery: Find qualified seekers quickly and easily.</li>
        <li>Access to a qualified pool of seekers: Connect with projects that align with your brand and goals.</li>
        <li>Streamlined proposal management: Review and manage proposals efficiently.</li>
        <li>Secure and transparent transactions (if applicable): Ensure secure and transparent exchange of funds.</li>
      </ul>
      <h2>Benefits for Seekers</h2>
      <ul>
        <li>Increased exposure to potential sponsors: Gain greater visibility for your project or event.</li>
        <li>Simplified sponsorship proposal process: Create and submit proposals with ease.</li>
        <li>Centralized communication and management tools: Manage all sponsorship communication and activities in one place.</li>
      </ul>
    </div>
    <div className="cta">
      <a href="#" className="btn">Become a Sponsor</a>
      <a href="#" className="btn btn-secondary">Become a Seeker</a>
    </div>
  </div>
  )
}
