
import './App.css';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Watch from './pages/Watch';
import Header from './components/Header';
import {videoUrl,searchUrl,channelUrl} from './libs/api'
import { useEffect, useState } from 'react';

let defaultVideos = JSON.parse(sessionStorage.getItem('defaultVideos')) || null;
let selectedWatch  = JSON.parse(sessionStorage.getItem('selectedWatch')) || null;

function App() {
  const [videoItems,setVideoItems] = useState([]);
  const [selectVideo,setSelectVideo] = useState(null);
  //비디오데이타
  const videoDate = async ()=>{
    const url = videoUrl; 
    const response = await fetch(url);
    const result = await response.json();
    setVideoItems(result.items)
    defaultVideos=result.items
  }
  const search = async (keyword) => {
    const url = searchUrl(keyword)
    const response = await fetch(url);
    const result = await response.json();
    setVideoItems(result);
  }

  useEffect(()=>{
    sessionStorage.setItem('defaultVideos',JSON.stringify(defaultVideos));
    sessionStorage.setItem('selectedWatch',JSON.stringify(selectedWatch));
  },[selectVideo])

  useEffect(()=>{
    videoDate();
  },[])
  //로고클릭시 
  const clickLogo = () =>{
    setVideoItems(defaultVideos);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header search={search} clickLogo={clickLogo} />
        <Routes>
          <Route path="/" element={<Home videoItems={videoItems} search={search} />} />
          <Route path="/search" element={<Search videoItems={videoItems} search={search} />} />
          <Route path="/watch" element={<Watch videoItems={videoItems} search={search} /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
