import React from "react";
import styles from './header.module.css'
import { Link } from 'react-router-dom';

export default function Header(props) {
    
    return(
        <>
            <div className={styles.headermain}>
                <div className={styles.header}>
                    <Link to="/">Home</Link>
                    <Link to="/Jobs">Experience</Link>
                    <Link to="/Hobbies">Hobbies</Link>
                    <Link to="/Contact">Contact</Link>  
                </div>
                <div className={styles.footer}>
                    <a href="https://github.com/ksoka/">Github</a>
                    <a href="https://www.linkedin.com/in/kalle-soukka-896b2b1a2/">LinkedIn</a>
                    <a href="https://letterboxd.com/Kaffecrash/">Movie reviews</a>
                </div>
            </div>
        </>
    )

}