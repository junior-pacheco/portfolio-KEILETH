import React from "react";
const Footer = () => {
  return (
<footer className="bg-black text-[#93928c] md:h-[50vh] h-[45vh] ps-4 flex flex-col items-center justify-center overflow-hidden">
  <div className="grid grid-cols-5 grid-rows-5 gap-5">
    
    {/* Redes Sociales */}
    <div className="col-span-2 w-[50vw] row-span-2 flex flex-col font-britti">
      <a>X/TWITTER</a>
      <a>DRIBBBLE</a>
      <a>BEHANCE</a>
    </div>

    {/* Mensaje */}
    <div className="col-span-2 row-span-2 text-white font-britti font-medium text-lg col-start-1 row-start-3 flex flex-col justify-center">
      <p>Let’s talk! Discuss about your project.</p>
    </div>

    {/* Botón */}
    <div className="col-span-2 col-start-1 row-start-5 flex flex-col items-start justify-start">
      <button className="px-4 py-2 bg-white text-black text-sm rounded-3xl font-medium">BOOK A CALL</button>
    </div>

    {/* Proyectos */}
    <div className="col-span-2 w-[50vw] font-britti row-span-2 col-start-3 row-start-1 flex flex-col">
      <a>30 LOGOS & MARKS</a>
      <a>Logofolio Vol. 01</a>
      <a>(16) Logos & Marks</a>
    </div>

    {/* Derechos de autor */}
    <div className="col-span-2 w-[55vw]  col-start-3 font-britti row-start-5 flex  text-[13px] flex-col items-center justify-center">
      <p>2025 © Brand & Web Design by Keileth</p>
    </div>

  </div>
</footer>

  );
};

export default Footer;