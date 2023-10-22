import React from 'react'


function VideoPart() {
  return (
    <div>
      <video autoPlay loop muted playsInline className="absolute z[-1]">
        <source src="/volvo-video.mp4" />
      </video>
    </div>
  );
}

export default VideoPart




/*<div className="w-full h-screen">
      <div>
        <video
          autoPlay
          loop
          muted
          className=" w-full h-full object-cover"
        >
          <source src="/volvo-video.mp4" />
        </video>
        <div className="flex flex-col  absolute w-full h-full top-[50%] -translate-x-2/4 -translate-y-2/4 justify-center items-center text-white">
          <h2>A new era for safety</h2>
          <h1>Does How you feel affect</h1>
          <h1>How you drive</h1>
        </div>
      </div>
    </div>*/