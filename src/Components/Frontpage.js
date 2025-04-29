import React from "react";
import styles from "./frontpage.module.css"
import Image from "./SectionComponents/ImgContainer";
import titlePic from "./tempimages/TitlePic.jpg"
import VideoElement from "./SectionComponents/VidContainer";
import unityvid from "./tempimages/unityvid.mp4";

export default function Frontpage() {

    return(
        <>
            <VideoElement vidsrc={unityvid} filetype="video/mp4"/>
            <div className={styles.intro}>
                Kalle Soukka
                <Image alt="me" imgsrc={titlePic} />
            </div>
            <div className="introContent">
                <div>
                    Programmer, Guitar player, Climber, Paraglider, and a bunch from in between
                </div>
            </div>
        </>
    )
}