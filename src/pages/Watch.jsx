import React from 'react';
import VideoList from '../components/VideoList';
import VideoWatch from '../components/VideoWatch';
const Watch = () =>{
    return (
        <div className='watch-content'>
            <div className='view'>
                <VideoWatch />
           </div> 
            <div className='list'>
                <VideoList />
            </div> 
        </div>
    )

}

export default Watch;