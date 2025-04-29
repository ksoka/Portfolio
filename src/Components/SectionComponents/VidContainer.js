import React, { useEffect } from 'react';
import styles from './video.module.css'

export default function VideoElement(props) {

    return(
        <>
            <div className={styles.video}>
                <video autoPlay muted loop>
                    <source src={props.vidsrc} type={props.filetype}></source>
                </video>
            </div>
        </>
    )
}