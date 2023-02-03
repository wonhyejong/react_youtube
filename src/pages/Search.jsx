import React from 'react';
import Sidebar from './../components/Sidebar';
import VideoList from '../components/VideoList';

const Search = () =>{
 
    return (
        <div className='contents-wrap'>
            <div>
                <Sidebar />
            </div>
            <div className='list'>
                <VideoList />
            </div>
        </div>
    )
}

export default Search;