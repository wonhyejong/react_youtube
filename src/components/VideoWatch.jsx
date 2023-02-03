import React from 'react';

const VideoWatch = () => {
    return (
        <div className='watchBox'>
            <div className="playVideoBox">
            <iframe className="videoframe" type="text/html" title="비디오플레이어"
            src={`http://www.youtube.com/embed/`}
           ></iframe>
            </div>
            <div className='txtContainer'>
                <h2>비디오 타이틀</h2>
                <h3>채널타이틀</h3>
                <p className='desc'>description</p>
            </div>
        </div>
    );
};

export default VideoWatch;