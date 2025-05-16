import React from 'react'
import Image from 'react-bootstrap/Image';
import Photo from "../../Assets/images/service-1.jpg"
import styles from "./backgroundPicture.module.css"

const BackgroundPicture = () => {
    return (
        <div>
            <Image className={`${styles["background-picture"]}`}  src={Photo} fluid />
        </div>
    )
}

export default BackgroundPicture
