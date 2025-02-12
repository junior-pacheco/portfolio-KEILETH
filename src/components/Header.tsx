import React from "react";

const Header = ({open, setopenMenu}) => {

  return (
    <>
      {/* Header en modo PC */}
      <div className="hidden lg:flex bg-[#282828] h-[7vh] md:h-[9vh] mt-4 2xl:h-[7vh] shadow-sm fixed top-6 left-1/2 -translate-x-1/2 w-[40vw] 2xl:w-[30vw] rounded-full z-50">
        <div className="h-full gap-6 flex items-center  w-full justify-center px-6">
          <div className="flex  items-center">
              <div className="md:h-10 md:w-32 2xl:h-10 2xl:w-22  h-[4vh] w-[18vw] rounded-full overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/IlAn0gwm3XlPsx8NPuQPsHNwo0Y.png"
                  alt="Logo"
                  className="h-full w-full object-cover"
                />
              </div>
          </div>

          {/* Menú en PC */}
          <div className="hidden lg:flex space-x-8">
            {["Me", "Skills", "Work", "Contact"].map((text, index) => (
              <a
                key={index}
                href="#"
                className="relative group text-base font-medium text-gray-300 hover:text-white flex items-center"
              >
                <span className="relative h-[1.2em] overflow-hidden">
                  <span className="block group-hover:animate-cylinder">{text}</span>
                </span>
                <span className="absolute left-0 bottom-[-8px] w-full h-[2px] bg-white rounded-full scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menú hamburguesa en modo móvil */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setopenMenu(open)} className="text-white focus:outline-none">
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
              <path fill="white" d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
              <path fill="white" d="M3 6h18M3 12h18m-18 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="fixed overflow-x-hidden overflow-y-hidden top-0 left-0 w-screen h-[calc(100vh-1px)] bg-[#282828] text-white flex items-center justify-center text-lg">
          <div className="flex flex-col w-[70%]">
          <div className="flex flex-col items-start p-6 justify-center w-full h-[80%] mt-56">
            {["Me", "Skills", "Work", "Contact"].map((text, index) => (
              <a key={index} href="#" className=" text-white  text-2xl">
                {text}
              </a>
            ))}
          </div>
          <div className="flex flex-col pl-6 text-sm opacity-50 ">
            <span><a href="">Twitter</a> / <a href="">Instagram</a></span>
            <p>Privacy policy</p>
          </div>
        </div>
        <div className=" w-[31%] -rotate-90 relative ">
        <h1 className="text-[9rem]  tracking-widest font-bold uppercase absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 opacity-20">KEILETH</h1>
        </div>
      </div>
      )}
    </>
  );
};

export default Header;