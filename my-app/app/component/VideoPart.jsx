import React from 'react'


function VideoPart() {
  return (
  
    <div className='flex h-[100vh] overflow-auto'>
      <video autoPlay loop muted playsInline className="flex relative z[-1] w-screen object-cover overflow-auto ">
        <source src="/volvo-video.mp4" />
      </video>

      <div className='flex absolute w-full h-full
       top-0 flex-col justify-center items-center text-white '>
        <h1 className=''>A New era for safety</h1>
        <h1>Does how you feel affect</h1>
        <h1>How you Drive?</h1>
      </div>

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