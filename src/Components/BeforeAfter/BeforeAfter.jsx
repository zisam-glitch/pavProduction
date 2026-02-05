import React, { useRef, useState, useEffect } from 'react';

const BeforeAfter = ({ data }) => {
  // const { bgImg, beforeImg, afterImg } = data;

  // const containerRef = useRef(null);
  // const beforeRef = useRef(null);
  // const handleRef = useRef(null);

  // const [maxX, setMaxX] = useState(0);
  // const [offsetX, setOffsetX] = useState(0);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   if (!container) return;

  //   const updateDimensions = () => {
  //     setMaxX(container.offsetWidth);
  //     setOffsetX(container.getBoundingClientRect().left);
  //   };

  //   updateDimensions();
  //   window.addEventListener('resize', updateDimensions);

  //   const moveSlider = clientX => {
  //     const curX = clientX - offsetX;
  //     let curPos = (curX / maxX) * 100;
  //     if (curPos > 100) curPos = 100;
  //     if (curPos < 0) curPos = 0;

  //     beforeRef.current.style.right = `${100 - curPos}%`;
  //     handleRef.current.style.left = `${curPos}%`;
  //   };

  //   const onMouseDown = e => {
  //     e.preventDefault();
  //     document.addEventListener('mousemove', onMouseMove);
  //     document.addEventListener('mouseup', onMouseUp);
  //   };

  //   const onMouseMove = e => {
  //     e.preventDefault();
  //     moveSlider(e.clientX);
  //   };

  //   const onMouseUp = () => {
  //     document.removeEventListener('mousemove', onMouseMove);
  //     document.removeEventListener('mouseup', onMouseUp);
  //   };

  //   const onTouchStart = e => {
  //     moveSlider(e.touches[0].clientX);
  //     document.addEventListener('touchmove', onTouchMove, { passive: false });
  //     document.addEventListener('touchend', onTouchEnd);
  //   };

  //   const onTouchMove = e => {
  //     e.preventDefault(); // Important for mobile
  //     moveSlider(e.touches[0].clientX);
  //   };

  //   const onTouchEnd = () => {
  //     document.removeEventListener('touchmove', onTouchMove);
  //     document.removeEventListener('touchend', onTouchEnd);
  //   };

  //   const handle = handleRef.current;
  //   handle.addEventListener('mousedown', onMouseDown);
  //   handle.addEventListener('touchstart', onTouchStart, { passive: false });

  //   return () => {
  //     window.removeEventListener('resize', updateDimensions);
  //     handle.removeEventListener('mousedown', onMouseDown);
  //     handle.removeEventListener('touchstart', onTouchStart);
  //     document.removeEventListener('mousemove', onMouseMove);
  //     document.removeEventListener('mouseup', onMouseUp);
  //     document.removeEventListener('touchmove', onTouchMove);
  //     document.removeEventListener('touchend', onTouchEnd);
  //   };
  // }, [maxX, offsetX]);

  return (
    // <section
    //   className="st-before-after-section st-dynamic-bg"
    //   style={{ backgroundImage: `url(${bgImg})` }}
    // >
    //   <div className="st-before-after-wrap">
    //     <div className="container">
    //       <div className="st-before-after-in">
    //         {/* <div className="st-before-after" ref={containerRef}>
    //           <div
    //             className="st-after st-single-slide st-dynamic-bg"
    //             style={{ backgroundImage: `url(${afterImg})` }}
    //           ></div>
    //           <div
    //             className="st-before st-single-slide st-dynamic-bg"
    //             style={{ backgroundImage: `url(${beforeImg})` }}
    //             ref={beforeRef}
    //           ></div>
    //           <div className="st-handle-before-after" ref={handleRef}>
    //             <span></span>
    //           </div>
    //         </div> */}
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '2rem auto',
      padding: '0 1rem',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    }}> 
      <video 
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          borderRadius: '16px',
          transition: 'transform 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseOver={e => e.target.play()}
        onMouseOut={e => e.target.pause()}
        src="https://res.cloudinary.com/dv5noi9zl/video/upload/v1764827020/6037439_Teeth_Polishing_1280x720_1_urwdix.mp4"
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default BeforeAfter;
