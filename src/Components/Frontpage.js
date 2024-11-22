import React from "react";
import styles from "./frontpage.module.css"

export default function Frontpage() {

    return(
        <>
            <div className={styles.intro}>
                Kalle Soukka
            </div>
            <div className="subBox">
                <div>
                    Programmer, Guitar player, Climber, Paraglider, and a bunch from in between
                </div>
            </div>
        </>
    )
}