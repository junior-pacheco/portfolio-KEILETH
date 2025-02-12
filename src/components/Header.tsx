import React, { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

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
                  <span className="block group-hover:animate-cylinder font-britti">{text}</span>
                </span>
                <span className="absolute left-0 bottom-[-8px] w-full h-[2px] bg-white rounded-full scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menú hamburguesa en modo móvil */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
          {menuOpen ? (
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

      {menuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#282828] text-white flex flex-col items-center justify-center text-lg">
          <div className="flex flex-col items-start p-6 justify-center w-full h-[80%] mt-56">
            {["Me", "Skills", "Work", "Contact"].map((text, index) => (
              <a key={index} href="#" className="py-1 text-gray-300 hover:text-white text-2xl">
                {text}
              </a>
            ))}
          </div>
          <div className="flex gap-6 flex-col justify-center h-[20%] items-center text-center w-full">
            <div className="flex flex-col justify-center items-center h-[20%] text-center w-full">
              <div className="flex gap-2 w-full">
                <a href="#" className="py-2 ms-8 text-gray-300 hover:text-white text-sm">
                  Twitter /
                </a>
                <a href="#" className="py-2 text-gray-300 hover:text-white text-sm">
                  Instagram
                </a>
              </div>
              <span className="text-gray-300 hover:text-white text-start w-full ms-16 text-sm">
                Privacy Policy
              </span>
              <div className="flex items-center justify-center px-6 py-4 w-full max-w-[80%]">
                <h1 className="text-7xl mt-16 font-bold uppercase tracking-widest">KEILETH</h1>
                <span className="text-3xl font-bold mt-10 ml-2">Ⓚ</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
