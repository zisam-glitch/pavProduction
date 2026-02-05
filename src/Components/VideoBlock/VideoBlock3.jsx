import React, { useState } from 'react'
import VideoModal from '../VideoModal/VideoModal';

const VideoBlock3 = ({ imgSrc, videoSrc }) => {

  const [iframeSrc, setIframeSrc] = useState('about:blank');
  const [toggle, setToggle] = useState(false);

  const handelClick = () => {
    setIframeSrc(`${videoSrc}`);
    setToggle(!toggle);
  };

  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };
  return (
    <>
      <div className="st-hero-img">
        <img src={imgSrc} alt={imgSrc} />
        <span
          className="st-play-btn st-style1 st-color1 st-video-open"
          onClick={handelClick}
        >
         <svg width="277" height="277" viewBox="0 0 277 277" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="138.5" cy="138.5" r="138.5" fill="#925A27"/>
<path d="M194.857 135.032L109.607 92.4069C108.406 91.8102 106.984 91.8721 105.841 92.5774C104.698 93.2865 104 94.5304 104 95.8749V181.125C104 182.47 104.698 183.713 105.841 184.423C106.461 184.806 107.166 185 107.875 185C108.468 185 109.061 184.864 109.607 184.593L194.857 141.968C196.171 141.309 197 139.969 197 138.5C197 137.031 196.171 135.691 194.857 135.032Z" fill="white"/>
</svg>

          <span className="st-video-animaiton">
            <span />
          </span>
        </span>
      </div>
      <VideoModal isTrue={toggle} iframeSrc={iframeSrc} handelClose={handelClose} />
    </>
  )
}

export default VideoBlock3
