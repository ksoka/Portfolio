import React, { useState } from "react";
import Title from "./SectionComponents/Title";
import Image from "./SectionComponents/ImgContainer";
// import VideoElement from "./SectionComponents/VidContainer";
import guitarPic from "./tempimages/guitarPic.jpg"
import climbingpic from "./tempimages/ClimbingPic.jpg";
import paraglidingPic from "./tempimages/ParaglidingPic.jpg";
import espresso from "./tempimages/espresso-machine.jpg";
import unitypic from "./tempimages/Unity_Pic.png";
// import unityvid from "./tempimages/unityvid.mp4";

export default function Hobbies() {
    
    let guitar;
    let climbing;
    let paragliding;
    let coffee;
    let gaming;

    guitar = (
        <>
        <h2>Guitar</h2>
        <div className="textContent">
            <Image alt="guitar" imgsrc={guitarPic} />
            <div className="textContextText">I've been playing guitar since I was 13 years old. I started it with electric guitar however nowadays I play acoustic
                guitar in fingerstyle. When I was in my high school at Madetoja I was in a couple of bands. However after school I've
                been playing just by myself. I mainly play cover songs from movies, other artists and games. I arrange the songs myself
                most of the time though sometimes I do work on established arrangements.
                My main guitar is Lakewood M-32 CP that I bought in 2023. My other guitars that I own are Hagström Mocon 2 and I have
                Indie electric guitar.
            </div>
        </div>
        </>
    )

    climbing = (
        <>
        <h2>Climbing</h2>
        <div className="textContent">
            <Image alt="climbingimg" imgsrc={climbingpic} />
            <div className="textContextText">I started climbing in 2023 and have been doing it very actively ever since. I've mainly done bouldering though I do
                occationally do some rope climbing as well. I've also climbed outdoor. I currently climb on around 7a+ grade though I've
                managed to top a couple of harder routes as well.
            </div>
        </div>
        </>
    )

    paragliding = (
        <>
        <h2>Paragliding</h2>
        <div className="textContent">
            <Image alt="paraglidingPic" imgsrc={paraglidingPic} />
            <div className="textContextText">I started paragliding in 2024. I've only so far began my courses on it. The goal is to do some casual flying
                and try many different areas of paragliding.
            </div>
        </div>
        </>
    )

    coffee = (
        <>
        <h2>Coffee</h2>
        <div className="textContent">
            <Image alt="coffeepic" imgsrc={espresso} />
            <div className="textContextText">Some might not think coffee as a hobby so what I mean with coffee as a hobby is that I have some more coffee
                equipment than just your normal filter coffee maker. I started researching better coffee equipment in 2022 and
                I have been testing all sorts of things regarding coffee since. I have a coffee grinder at home and I own
                couple of different types of coffee makers to give coffee some variety. I also test out different more expensive
                coffees form different roasters. 
            </div>
        </div>
        </>
    )

    gaming = (
        <>
        <h2>Gaming & Unity</h2>
        <div className="textContent">
            {/* <VideoElement vidsrc={unityvid} filetype="video/mp4"/> */}
            <Image alt="unity" imgsrc={unitypic} />
            <div className="textContextText">I've been playing games since early childhood and I still play nowadays. I play on PlayStation and on Nintendo 
                Switch. I have very big interest on game design and I have started to learn Unity Game Engine. So far I've only
                done courses for unity but the plan is to start creating my own game down the line.
            </div>
        </div>
        </>
    )

    const [content, display] = useState(guitar);

    return(
        <>
            <div className="subBox">
                <Title title="Hobbies"/>
                <div className="buttonContainer">
                    <button onClick={() => display(guitar)}>Guitar </button>
                    <button onClick={() => display(climbing)}>Climbing </button>
                    <button onClick={() => display(paragliding)}>Paragliding </button>
                    <button onClick={() => display(coffee)}>Coffee </button>
                    <button onClick={() => display(gaming)}>Gaming </button>
                </div>
                <div className="textBox">
                    {content}
                </div>
            </div>
        </>
    )
}