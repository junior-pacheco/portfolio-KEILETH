import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#282828] text-[#93928c] md:h-[50vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Sección inferior */}
      <div className="max-w-7xl md:h-[50%] h-[20%] mx-auto md:gap-44 md:text-xl flex flex-col md:flex-row justify-between items-center pt-6 pb-6 text-gray-500 text-sm px-4">
        <a href="https://google.com" className="md:text-[10vh] 2xl:text-[8vh] text-[3vh] font-bold">contact@keilethcxst.com</a>
        <div className="flex space-x-6 mt-4 md:mt-0">
          {["Twitter", "Behance", "Instagram"].map((social, index) => (
            <a key={index} href="#" className="hover:text-white transition-colors">
              {social}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-centermd:h-[50%] md:w-full 2xl:w-full 2xl:h-full justify-center bottom-0 left-0 right-0 overflow-hidden px-8 md:px-16 lg:px-24">
        <h1 className="text-7xl md:text-[20vw] md:font-semibold font-bold uppercase tracking-widest text-center leading-none mb-[-4vw]">KEILETH</h1>
        <span className="text-3xl font-bold md:text-5xl md:mt-10 2xl:mt-16 mb-2 ml-2">Ⓚ</span>
      </div>
    </footer>
  );
};

export default Footer;
