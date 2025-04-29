import React from "react";
import styles from './footer.module.css'
import {FaGithub} from "react-icons/fa";

export default function Footer() {
    return(
        <>
            <div className={styles.footer}>
                <FaGithub size={30} style={{color:"#fff", marginRight: "1rem" }}/>
                <a href="https://github.com/ksoka/">Github</a>
                <a href="https://www.linkedin.com/in/kalle-soukka-896b2b1a2/">LinkedIn</a>
                <a href="https://letterboxd.com/Kaffecrash/">Movie reviews</a>
            </div>
        </>
    )
}