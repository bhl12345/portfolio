/**
 * 
 */
import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div style={{backgroundImage: 'url(images/background-site.jpg)'}}>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta"></span>
                <h2 className="colorlib-heading animate-box">History</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Private Development <span>2020-present</span></h2>
                        <p> I have been doing private development including this site.
                            The tools I am currently utilizing for full stack developement.
                            <ul>
                        	<br></br>
                        		<li>Spring Tool Suite IDE</li>
                        		<li>Java</li>
                        		<li>JPA</li>
                        		<li>Spring</li>
                        		<li>Spring Boot</li>
                        		<li>Hibernate</li>
                        		<li>MySql DB</li>
                        		<li>Maven</li>
                        		<li>React</li>
                        		<li>Bootstrap css</li>
                        		<li>GitHub</li>
                        </ul></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Cyberdata Technologies<span> June 1, 2019 - March 1,2020  Java Developer</span></h2>
                        <p>Developer for Inspector General Evaluation Management System (IGEMS web application
                           Coded changes based on requirements by Air Force Material Command using java 7 HTML, CSS and JavaScript. 
                           Created JUnits for testing. Analyzed code base for dead code and well as possible re-factoring opportunities.
                           Developed webservices and provided guidance on new technologies to streamline the development process.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Nationwide Financial<span> July 20,2015-Nov 2018– IT Specialist/Application Development</span></h2>
                        <p>Participated in migration from legacy system to a web based solution. Wrote RESTful services for retirement plan administration as well as 
                        for participant loans. 
                        Services were new loans, refinance loans, loan amortization schedule, if the participant is eligible for a loan are a few examples. 
                        Provided problem detection and resolution for a large distributed transactional system that is written in java 7. 
                        The system consists of a java swing application as well as batch processing during the night that is written with java code as well. 
                        Currently the swing UI is being replaced with a web application using JavaScript, CSS, Html as well as Angular. My responsibilities 
                        for that application were the same as the swing UI just with different technology. 
                        Data is stored in an Oracle 12 database. I used SQL to retrieve data as well as analyze and fix if needed </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}