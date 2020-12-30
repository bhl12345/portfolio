/**
 * 
 */
import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div style={{backgroundImage: 'url(images/background-site.jpg)'}}>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
           <div className="row">
            <div className="col-md-12">
              <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>              
                    <h1> I have been an IT professional since 1998. I have experience in all phases of the development life cycle. Support Analyst, 
                         Business Analyst and Software Developer are examples of positions I have held in my career. Technology changes quick and for over 20 years I have learned and adapted too many of those changes. 
                         I am a person who thrives on new challenges. To me that is what makes the industry so exciting and self satisfying. The passion I have to create viable solutions for my customers is unmatched by other IT professionals. 
                         Whether those customers be internal business customers or external clients.</h1>                  
                    </div>
                   </div>
                </div>
              </div>
           </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta"></span>
                <h2 className="colorlib-heading">Tools I have used in the System Development Life Cycle</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Development Technologies</h3>
                    <p>Java , JPA ,Spring JPA , Spring Boot, Maven , React , Hibernate , Spring Restful Services ,
                    Spring Tool Suite ,  Eclipse multiple versions,
                    JavaScript, HTML, XML, CSS, VB, SQL, 
                    Github, Gradle, VS Code, NPM, Apache-Tomcat, Glassfish, Web-sphere 7.5 -8.5 , 
                    New Relic Application Performance Monitor,  Liquibase,  Squirrel, Toad, ElipseLink, VSTS, 
                    CVS code repository, SVN code Repository, WinSCP, Microsoft Installer, Visual Studio, Microsoft Office Suite, SmartGWT,
                    JIRA,Tortoise HG, Mercurial, JUnit, Mockito, Toad for Oracle, Apache-Tomcat, </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-monitor" />
                </span>
                <div className="desc">
                    <h3>Operating Systems</h3>
                    <p>Windows up to version 10, Mac , Unix, VMS, </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Databases</h3>
                    <p> Oracle 12, Oracle 11, PostgresSQL, Informix, H2, IBM DB2, SQL Server, MySql, Oracle RDB</p>
                </div>
                </div>
            </div>
            {/*
				 * <div className="col-md-4 text-center animate-box"> <div
				 * className="services color-2"> <span className="icon"> <i
				 * className="icon-data" /> </span> <div className="desc"> <h3>Dev
				 * Ops</h3> <p>Jenkins , Kubernetes , Docker </p> </div>
				 * </div> </div> <div className="col-md-4 text-center
				 * animate-box"> <div className="services color-4"> <span
				 * className="icon"> <i className="icon-layers2" /> </span> <div
				 * className="desc"> <h3>Graphic Design</h3> <p>My friend
				 * knows .. P</p> </div> </div> </div> <div className="col-md-4
				 * text-center animate-box"> <div className="services color-6">
				 * <span className="icon"> <i className="icon-phone3" /> </span>
				 * <div className="desc"> <h3>Digital Marketing</h3> <p>I use
				 * Instagram eight hours a day :) </p> </div> </div> </div>
				 */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}