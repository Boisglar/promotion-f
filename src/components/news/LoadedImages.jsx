import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './LoadedImages.module.css'

const LoadedImages = (item) => {
    const [copied, setCopy] = useState(false)
    return (
        <div className={styles.photo}>
            <CopyToClipboard text={`http://localhost:4000/${item.path}`}
                onCopy={() => setCopy(true)}>
                <img className={styles.img} src={`http://localhost:4000/${item.path}`} alt={item.path} />
            </CopyToClipboard>
            {copied ? <span className={styles.span}>Скопировано</span> : null}
        </div>
    );
};

export default LoadedImages;