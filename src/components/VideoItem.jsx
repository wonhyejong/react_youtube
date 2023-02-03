import React from 'react';
import './VideoItem.css';
const VideoItem = ({videoItem}) => {
    return (
        <li className='videoItem'>
            <div className='Item'>
                <div className='thumnail'>
                    <img src={videoItem.snippet.thumbnails.medium.url} alt="videoThumbnail" />
                </div>
                <div className='metaDate'>
                    <div className="channelImg">
                        <img src={videoItem.snippet.thumbnails.default.url} alt="channelImg-thum" />
                    </div>
                    <div className='infoText'>
                        <p className='title'>{videoItem.snippet.title}</p>
                        <p className='channel'>{videoItem.snippet.channelTitle}</p>
                        <p className='publishDate'>{videoItem.snippet.publishedAt}</p>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoItem;