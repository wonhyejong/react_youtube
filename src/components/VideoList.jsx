import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css';
const VideoList = ({videoItems,selectVideoItem,display}) => {
    /* 
       if( typeof videoItem.id === 'string'){
                    id= videoItem.id
                  }else(typeof videoItem.id.id === 'object'){
                    id= videoItem.id.videoId;
               }
    */
 
    return (
        <ul className='videoList'>
            {
             videoItems &&  videoItems.map( videoItem => (
             
                 <VideoItem 
                    videoItem={videoItem} 
                    key={VideoItem.id} 
                    selectVideoItem={selectVideoItem}
                    display={display}
                 /> 
               ))

            }
        </ul>
    );
};

export default VideoList;