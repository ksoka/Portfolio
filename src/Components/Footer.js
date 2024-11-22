import React from "react";
import styles from './footer.module.css'


export default function Footer() {
    return(
        <>
            <div className={styles.footer}>
                <a href="https://github.com/ksoka/">Github</a>
                <a href="www.linkedin.com/in/kalle-soukka-896b2b1a2">LinkedIn</a>
                <a href="https://letterboxd.com/Kaffecrash/">Movie reviews</a>
            </div>
        </>
    )
}