import React from 'react';
import Sidebar from '../components/Sidebar';
import VideoList from '../components/VideoList';

const Home = ({videoItems,selectVideoItem}) =>{
    return (
        <div className='contents-wrap'>
            <div>
                <Sidebar />
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

export default Home;