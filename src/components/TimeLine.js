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
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-5">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                    <h2>Contract Java Developer on site PCMS Datafit Cincinnati, Ohio<span> August 26,2014 - January 19,2015 </span></h2>
                      <p>Developed a base product Point of Sale system using J2EE, CSS, Spring, HTML and XML.
                      Met customer expectations for release date of internationalization of the Application
                      Used agile methodology to ensure expectations met productivity Responsible for turning 
                      Business Requirements into functional Java code. 
                      Used Maven for project builds and dependency injection.
                      Used JUnit and Mockito for unit testing. Regression tested UI with Auto Vera test suite. </p> 
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-5">
                    <i className="icon-pen2" />
                  </div>
                  <div className="timeline-label">
                  <h2>Contract Java Engineer  on site for Teradata. Dayton,Ohio<span> January 27,2014 - May 31,2014 </span></h2>
                    <p>Upgraded Java and Apache versions to the latest and greatest versions so that a configuration 
                    application could run on a Windows server. This provided a less costly way to upgrade their servers.</p> 
                  </div>
                </div>
              </article>
              <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
              <div className="timeline-entry-inner">
                <div className="timeline-icon color-5">
                  <i className="icon-pen2" />
                </div>
                <div className="timeline-label">
                <h2>Java Developer Jenzabar Inc. Cincinnati, Ohio<span>April 1 2012 - Nov 5 2013 - Java Developer</span></h2>
                  <p>In charge of integration with third party vendor to deal with payment plans.
              		 Wrote backend logic as well as front end logic for a web-based Accounts Receivable system for institutions of high learning. Diagnosed and fixed code that did not function properly.
              		 Used Maven for project builds. Developed using a webservice architecture. JUnit testing. Used liquibase change sets to create, update and delete database tables. Deployed application using Glassfish web server instance locally so that front end testing could be done to insure expected functionality.
              		 Used SVN repository for code storage</p> 
                </div>
              </div>
            </article>
            <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
            <div className="timeline-entry-inner">
              <div className="timeline-icon color-5">
                <i className="icon-pen2" />
              </div>
              <div className="timeline-label">
              <h2>Navistar Inc. Springfield, Ohio <span> June 98 – March 2012 Multiple positions</span></h2>
              <h2> Sr Application Analyst/Developer.<span> Feb 2008- March 2012 </span></h2>
                <p>Coded J2EE clients using SOA architecture and Java web services.
                   Experience using JDBC for both Oracle and SQL Server. Developed a java swing application used to print vehicle labels, in the productions 
                   of International Truck and Engine. Hands on knowledge generating web service consumers, using the WSDL format. Strong experience using Rational Application Developer for WebSphere. Coded applications using Java 6 and JRE 1.6.0 and higher. 
                   Integrated legacy systems into java. Provided stop gap application for the Department of Energy to provide data for electric vehicles. 
                   This was in order to ensure Navistar received the grant money for the program. Developed applications for Intermec Scanners, 2425 and CK31</p>
                   <h2> Sr Business Analyst<span> Sept 2005-Feb 2008 </span></h2>
                   <p>Performed Business Analyst duties. This included gathering business and functional requirements, in addition to all documentation necessary for newly requested IT systems.
                   Interfaced with the business community, both internal and external, to better understand their needs. Conducted requirement reviews with IT staff and business customers.
                   Performed testing of bug fixes and new code for production Java applications. Conducted gap analysis for possible acquisition of additional products.</p>
                   <h2> Application Analyst.<span> Jan 2001- Sept 2005 </span></h2>
                   <p>Integral member of the team responsible for ramping up the Cab Assembly Plant in Springfield, Ohio. Traveled to Japan to interface with Hitachi Consultants to understand the new system for the Cab Plant.
                   Responsible for the 24/7 on call support Cab Build System, working as the IT Liaison between the cab plant management staff and the IT organization. 
                   The system is composed of MQ series, Java applications, DB2 databases, RSSQL, and RsLinx. Managed and coordinated the upgrade of the CBS system. 
                   This included the addition of a SQL database running stored procedures, as well as additional ladder logic for PLCs on the shop floor. 
                   QA tested, regression tested, and user acceptance tested all changes to the Cab Build System to insure a smooth install.
                   </p>
                   <h2> Application Support Analyst <span> June 1998- Jan 2001 </span></h2>
                   <p>Responsible for Assembly Information System. Provided 24/7 on call support. 
                   This system ran on a VAX VMS platform, Dec Control Language (DCL), C with an Oracle RDB backend. 
                   The system had a user interface as well as a multitude of Batch Jobs which processed data nightly.
                   Coordinated the stabilization of the AIS system. Managed two developers, a DBA, 
                   as well as a System Administrator in order to prioritize, code, test and install all software changes into production.
                   Responsible for the 24/7 support, as well as bug fixes for the Bill of Lading System at the Springfield Assembly Plant. 
                   The system was used to weigh and print the BOL document so that vehicles could be shipped out of the plant. 
                   The system was composed of VB applications with a SQL backend.
                   </p>
              </div>
            </div>
          </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
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