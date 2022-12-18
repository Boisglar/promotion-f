import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const LoadedImages = (item) => {
    const [copied, setCopy] = useState(false)
    return (
        <div>
            <CopyToClipboard text={`http://localhost:4000/${item.path}`}
                onCopy={() => setCopy(true)}>
                <img src={`http://localhost:4000/${item.path}`} alt={item.path} />
            </CopyToClipboard>
            {copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
        </div>
    );
};

export default LoadedImages;