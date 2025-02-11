import React from "react"
import { ArrowUpRight } from "lucide-react"

const Home = () => {
  return (
    <div className="bg-[#0A0A0B] gap-2 text-white min-h-[80vh] flex flex-col lg:flex-row justify-between items-center p-4 lg:p-20">
      {/* Contenedor de texto */}
      <div className="flex-1.5 mt-16 2xl:mt-4 md:mt-4">
        <h1 className="text-5xl md:text-5xl lg:text-8xl 2xl:text-9xl font-bold mt-6">Keileth Castillo</h1>
        <p className="text-5xl md:text-7xl lg:text-7xl 2xl:text-8xl  font-bold mb-8">
          Digital Designer
        </p>

        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-12">
          I'm passionate about my work because I believe that good design can make a real difference in the world — It
          can help businesses attract new customers, build stronger relationships, and create a more positive brand
          image. I love the challenge of taking someone's vision and turning it into a reality.
        </p>

        <a
          href="#work"
          className="inline-flex items-center text-lg border border-white px-6 py-3 rounded-full hover:bg-white hover:text-[#0A0A0B] transition-colors duration-300"
        >
          View my work
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 6l12 12m0 0V9m0 9H9"/></svg>
        </a>
      </div>

      {/* Imagen al lado derecho */}
      <div className="flex-1 md:flex 2xl:flex hidden justify-center mt-12 lg:mt-0">
        <img 
          src="../../public/img/dev.webp" 
          alt="Keileth Castillo" 
          className="md:w-[40vw] md:h-[80vh] 2xl:h-[70vh]  object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

export default Home
