import React, { useState } from "react";
import Title from "./SectionComponents/Title";

export default function Jobs(props) {
    let earlyJobs;
    let truckDriving;
    let cavokapp;
    let mediaTek;
    let profilence;

    earlyJobs = ( 
        <>
        <h2>Early jobbing</h2>
        <div>Some early jobs had were assisting in Engineering company Polartek, school assistant teacher and
        Summerjobbing and work experience as a waiter in restaurant Pannukakkutalo</div>
        </>
    )

    truckDriving = (
        <>
        <h2>Truck Driving</h2>
        <div>I drove my truck driving license while serving my mandatory finnish conscription service in Rovaniemi.
                After my service I worked as a civil engineering truck driver for Maanrakennus Keränen as a part time job. 
                I did this mostly during summertime while completing my studies in IT though I did a couple of gigs during
                the school year too. In total I ended up driving the truck for 3 years. 
        </div>
        </>
    )

    cavokapp = (
        <>
        <h2>Laskukierros/Cavokapp</h2>
        <div>During my school time I worked as a full-stack developer for my OAMK teacher on his web application for pilots logging their flight hours
                called Laskukierros or Cavokapp in English. The web UI consists of React and Angluar frontend with PHP backend.
                The work consisted of creating new features and fixing bugs. The site consisted of many different features
                which I participated working on with 2 of my student co-workers on the project. In total I worked for 2 months
                in this project.
        </div>
        </>
    )
    mediaTek = (
        <>
        <h2>MediaTek</h2>
        <div>During my OAMK studies we work project courses where we were participating in real world company projects.
            For me I ended up working at MediaTek Wireless Finland first as a web designer and then as a full-stack developer
            for their internal mobile network testing application web UI. The application was already built but needed new
            visual look so me and another student from OAMK got to work on the design of the UI. After the first project
            course was over I moved on to work as a full-stack developer on the same web UI now bringing new features
            and bugfixes to the site. This time I worked solo though had assistance from my team members if needed.
            The web site was build using PHP with some JavaScript on the side on frontend and Python for backend. After the
            projects were over I also worked as a summerjob for the company still doing the same work as before. In total
            I ended up working for MediaTek for 6 months out of which 2 were outside of school summerjobbing.
        </div>
        </>
    )
    profilence = (
        <>
        <h2>Profilence</h2>
        <div>I got into Profilence through a friend from school. I was doing test automation work for customer projects. 
                For the first month I worked as a assistant for already existing mobile device projects the company was doing.
                After this I started working on automotive projects. In total there were 3 projects which I started and worked on.
                The setup required visiting the customers site to prepare the test stations and get to know the people of the company.
                After this the work was done remotely from Profilence HQ while having support on the customers site.

                The work consisted of creating new test case scripts for the customer while also analysing the issues and 
                reporting them to the customer. The scipts were written in Python with an internal library with some 
                IronPython on the side. The projects also required communcation with the customer and also forwarding their
                requests if some of them were bigger than the customer project itsef. The projects were also mostly self managed.
                I ended up working at Profilence for 2 years
        </div>
        </>
    )

    const [content, display] = useState(earlyJobs);

    return(
        <>
            <div className="subBox">
                <Title title='Jobs'/>
                <div className="buttonContainer">
                    <button onClick={() => display(earlyJobs)}>Early Jobs</button>
                    <button onClick={() => display(truckDriving)}>Truck Driving</button>
                    <button onClick={() => display(cavokapp)}>Laskukierros/Cavokapp</button>
                    <button onClick={() => display(mediaTek)}>MediaTek</button>
                    <button onClick={() => display(profilence)}>Profilence</button>
                </div>
                <div className="textBox">
                    {content}
                </div>
            </div>
        </>
    )
}