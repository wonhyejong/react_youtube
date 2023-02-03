import React from 'react';
import VideoList from '../components/VideoList';
import VideoWatch from '../components/VideoWatch';
const Watch = ({selectVideoItem,videoItems,selectedWatch}) =>{
    return (
        <div className='watch-content'>
            <div className='view'>
                <VideoWatch selectedWatch={selectedWatch} />
           </div> 
            <div className='list'>
                <VideoList 
                videoItems={videoItems}
                selectVideoItem={selectVideoItem} 
                />
            </div> 
        </div>
    )

}

export default Watch;