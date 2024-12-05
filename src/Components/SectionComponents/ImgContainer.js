import React from 'react';
import styles from './image.module.css'

export default function Image(props) {
    return(
        <>
            <div className={styles.image}>
                <img alt={props.alt} src={props.imgsrc}></img>
            </div>
        </>
    )
}