import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
<footer id="contact" className="bg-black text-gray-400 md:h-[50vh] h-[45vh] ps-4 flex flex-col items-center justify-center overflow-hidden">
  <div className="grid grid-cols-5 grid-rows-5 gap-5">
    
    <div className="col-span-2 w-[50vw] row-span-2 flex flex-col font-britti">
      <a href="https://x.com/keilethh?t=j9BbsKbFkl_y3zWyUKWcjQ&s=09" className="cursor-pointer">X / TWITTER</a>
      <a className="cursor-pointer">DRIBBBLE</a>
      <a href="https://www.behance.net/keilethh" className="cursor-pointer">BEHANCE</a>
    </div>

    <div className="col-span-2 row-span-2 text-white font-britti font-medium text-lg col-start-1 row-start-3 flex flex-col justify-center">
      <p>Let’s talk! Discuss about your project.</p>
    </div>

    <div className="col-span-2 col-start-1 row-start-5 flex flex-col items-start justify-start">
      <a target="_blank" href="https://mail.google.com/mail/?view=cm&to=contact@keilethcxst.com"  className="px-4 py-2 bg-white text-black text-sm rounded-3xl font-medium"> CONTACT US</a>
    </div>

    <div className="col-span-2  w-[50vw] font-britti row-span-2 col-start-3 row-start-1 flex flex-col">
      <a href="https://www.behance.net/gallery/197199047/30-LOGOS-MARKS"  className="cursor-pointer">30 LOGOS & MARKS</a>
      <a href="https://www.behance.net/gallery/162463949/Logofolio-Vol-01-2023"  className="cursor-pointer">Logofolio Vol. 01</a>
      <a href="https://www.behance.net/gallery/215514439/(16)-LOGOS-MARKS"  className="cursor-pointer">(16) Logos & Marks</a>
    </div>

    <div className="col-span-2 w-[55vw]  col-start-3 font-britti row-start-5 flex  text-[13px] flex-col items-center justify-center">
      <p>2025 © Brand & Web Design by Keileth</p>
    </div>

  </div>
</footer>
  ) : (
    <footer id="contact" className="bg-black text-gray-400 py-6 px-8 h-[40vh] 2xl:h-[30vh] flex justify-between items-center relative">
    <div className="flex ms-12 2xl:ms-20 font-britti flex-col w-[15%] text-sm">
      <a href="https://x.com/keilethh?t=j9BbsKbFkl_y3zWyUKWcjQ&s=09" className="cursor-pointer">X / TWITTER</a>
      <a className="cursor-pointer">DRIBBBLE</a>
      <a href="https://www.behance.net/keilethh" className="cursor-pointer">BEHANCE</a>
    </div>

    <div className="flex font-britti w-[65%] flex-col text-sm text-start">
      <a href="https://www.behance.net/gallery/197199047/30-LOGOS-MARKS"  className="cursor-pointer">30 LOGOS & MARKS</a>
      <a href="https://www.behance.net/gallery/162463949/Logofolio-Vol-01-2023"  className="cursor-pointer">Logofolio Vol. 01</a>
      <a href="https://www.behance.net/gallery/215514439/(16)-LOGOS-MARKS"  className="cursor-pointer">(16) Logos & Marks</a>
    </div>

    <div className="flex flex-col md:justify-center 2xl:justify-end mt-14 font-britti font-medium md:h-[80%] text-white items-center w-[20%] text-center leading-none">
      <p className="text-lg 2xl:text-xl font-medium">Let's talk!</p>
      <p className="text-lg 2xl:text-xl  font-medium">Discuss about</p>
      <p className="text-lg 2xl:text-xl  font-medium 2xl:mb-8">your project.</p>
      <a target="_blank" href="https://mail.google.com/mail/?view=cm&to=contact@keilethcxst.com" className="px-4 mt-4 py-2 2xl:mt-4 text-black font-britti font-medium bg-white rounded-full text-sm">
      CONTACT US
      </a>
    </div>

    <div className="absolute bottom-2 left-1/2 mb-4  w-full text-start transform -translate-x-1/2 text-xs text-gray-400">
    <p className="ms-20 2xl:ms-28 font-britti">2025 © Brand & Web Design by Keileth</p>
    </div>
  </footer>
    
  );
};

export default Footer;
