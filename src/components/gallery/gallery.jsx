import React, { useState } from 'react'
import styles from './Gallery.module.scss'
import Photo from './photo';
import Video from './video';

export default function Gallery() {

    const [active, setActive] = useState(null);

    const hendlePhoto = () => {
        setActive('Photo')
    };

    const hendleVideo = () => {
        setActive('Video')
    }

  return (
    <div className={styles.main_gallery}>
        <div className={styles.menu_gallery}>
            <a href='p' className={styles.photo} onClick={hendlePhoto}>ФОТО</a>
            <a href='v' className={styles.video} onClick={hendleVideo}>ВИДЕО</a>
        </div>
        <div>
            {active === Video ? <Video/> : <Photo/>}
            {active === Photo && <Photo/>}
        </div>
    </div>
  )
}
