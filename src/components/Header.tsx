import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ open, setopenMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  
  return (
    <>
      {/* Header en modo PC */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`hidden lg:flex shadow-2xl bg-[#282828]/80 h-[7vh] md:h-[9vh] mt-4 2xl:h-[7vh] fixed top-6 left-[30%] 2xl:left-[35%] -translate-x-1/2 w-[40vw] 2xl:w-[30vw] rounded-full z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md" : ""
        }`}
      >
        <div className="h-full flex items-center w-full justify-around px-6">
          <div className="flex items-center">
            <div className="md:h-10 flex justify-center items-center md:w-32 2xl:h-10 2xl:w-22 h-[4vh] w-[18vw] overflow-hidden">
              <img
                src="/img/Recurso 2.png"
                alt="Logo"
                className="h-[5vh] w-[5vw] object-contain"
              />
            </div>
          </div>

          {/* Menú en PC */}
          <div className="hidden lg:flex space-x-8">
            {["Me", "Projects", "Contact"].map((text, index) => (
              <a
                key={index}
                href={`#${text.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById(text.toLowerCase());
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="relative group text-base font-britti font-medium text-gray-300 hover:text-white flex items-center"
              >
                <span className="relative h-[1.2em] overflow-hidden">
                  <span className="block group-hover:animate-cylinder">{text}</span>
                </span>
                <span className="absolute left-0 bottom-[-8px] w-full h-[2px] bg-white rounded-full scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Menú hamburguesa en modo móvil */}
      <div className="lg:hidden p-1 fixed top-4 left-4 z-50">
        <button onClick={() => setopenMenu(!open)} className="text-white focus:outline-none">
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
              <path
                fill="white"
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
              <path
                fill="white"
                d="M3 6h18M3 12h18m-18 6h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menú desplegable con animación de cierre */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed font-britti overflow-x-hidden overflow-y-hidden top-0 left-0 w-screen h-[calc(100vh-1px)] bg-[#282828] text-white flex items-center justify-center text-lg"
          >
            <div className="flex flex-col w-[70%]">
              <div className="flex flex-col items-start p-6 justify-center w-full h-[80%] mt-56">
                {["Me", "Projects", "Contact"].map((text, index) => (
                  <a
                    key={index}
                    href={`#${text.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const section = document.getElementById(text.toLowerCase());
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                      setopenMenu(false); // Cierra el menú al hacer clic
                    }}
                    className="text-white text-2xl"
                  >
                    {text}
                  </a>
                ))}
              </div>
              <div className="flex flex-col pl-6 text-sm opacity-50">
                <span>
                  <a href="https://x.com/keilethh?t=j9BbsKbFkl_y3zWyUKWcjQ&s=09" className="cursor-pointer">X / Twitter</a>
                </span>
                <p>Privacy policy</p>
              </div>
            </div>
            <div className="w-[31%] -rotate-90 relative">
              <h1 className="text-[9rem] tracking-widest font-medium uppercase absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 opacity-20">
                KEILETH
              </h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
