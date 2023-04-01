import React, { useRef, useState, useEffect } from 'react';
import '../Video/rose-3654.mp4'

export function VideoPlayer() {
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const videoRef = useRef();
   

    const playButton = () =>{
      console.log(111)
        const video = videoRef.current;
    if (!isPlaying) {
      video.play();
    }
    setIsPlaying(isPlaying);
    }

    const stopButton = () =>{
      console.log(222)
        const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    }
    setIsPlaying(!isPlaying);
    }

    const updateTime = () => {
        const video = videoRef.current;
        setCurrentTime(video.currentTime);
      };

      useEffect(() => {
        const video = videoRef.current;
        video.addEventListener('timeupdate', updateTime);
        return () => {
          video.removeEventListener('timeupdate', updateTime);
        };
      }, []);

    const timeVideo =() => {
        const hours = Math.floor(currentTime / 3600);
        const minutes = Math.floor(currentTime / 60);
        const seconds = Math.floor(currentTime % 60);
        return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    
    return(
        <>
        <h3>PART2</h3>
        <div>
        <video ref={videoRef} controls>
        <source src='../Video/rose-3654.mp4' type="video/mp4" />
        <p>
        Your browser doesn't support HTML video. Here is a
        <a href={`url.mp4`} >MP4</a> 
        video
      </p>
        </video>
        </div>
        <div>
            <button onClick={playButton}>Play</button>
            <button onClick={stopButton}>Pause</button>
            <span>{timeVideo()}</span>
        </div>
        </>
       
       
    )
}