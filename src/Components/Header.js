import React from "react";
import styles from './header.module.css'
import { Link } from 'react-router-dom';

export default function Header(props) {
    
    return(
        <>
            <div className={styles.header}>
                <Link to="/">Home</Link>
                <Link to="/Jobs">Experience</Link>
                <Link to="/Hobbies">Hobbies</Link>
                <Link to="/Contact">Contact</Link>  
            </div>
        </>
    )

}