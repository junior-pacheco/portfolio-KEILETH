import React from "react"
import { ArrowUpRight } from "lucide-react"

const Home = () => {
  return (
    <div className="bg-[#0A0A0B] gap-2 text-white min-h-screen flex flex-col lg:flex-row justify-centee items-center p-4 lg:p-20">
      {/* Contenedor de texto */}
      <div className="flex w-full  flex-col items-center mt-16 2xl:mt-4 md:mt-10">
      <span className="text-base font-britti">© Brand & Web Design by Keileth</span>
        <h1 className="text-4xl font-britti md:text-5xl lg:text-7xl 2xl:text-9xl">Crafting Identities,</h1>
        <p className="text-4xl font-britti md:text-7xl lg:text-7xl 2xl:text-9xl mb-8">
        Telling Stories
        </p>

        <p className="text-lg font-britti text-center md:text-xl lg:text-xl w-full mb-12">
        <span className="block">Graphic designer focused on crafting impactful brands. I blend creativity and strategy to build memorable visual</span>
        <span className="block">identities. With proficiency in English and Spanish, I transform ideas into strategic visual experiences. My goal is </span>
        <span className="block">to elevate your brand by merging aesthetics with functionality.
          Crafting Identities, Telling Stories </span>
        </p>

        <a
          href="#work"
          className="inline-flex font-britti items-center text-lg border text-black bg-white px-6 py-3 rounded-full"
        >
          BOOK A CALL
        </a>
      </div>
    </div>
  )
}

export default Home
