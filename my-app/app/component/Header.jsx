import React from 'react'
import { TfiAngleRight } from "react-icons/tfi";



function Header() {
  return (
    <>
      <div className="flex justify-between px-10 items-center">
        <div>
          <img src="/logo-volvo.png" width={130} height={80} alt="image" />
        </div>

        <div className="flex gap-4 font-semibold">
          <a>Our Cars</a>
          <a>Menu</a>
        </div>
      </div>

      <div className="flex bg-black justify-center items-center h-10 gap-10">
        <a className="font-semibold text-white ">Learn More</a>
        <TfiAngleRight className='text-white text-[15px]'/>
      </div>
    </>
  );
}

export default Header