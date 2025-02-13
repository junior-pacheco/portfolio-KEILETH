import { motion } from "framer-motion";
import React from "react";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Home = () => {
  return (
    <motion.div
      id="me"
      className="bg-[#0A0A0B] gap-2 text-white md:min-h-screen scrollbar-thin scrollbar-thumb 2xl:min-h-screen min-h-[65vh] flex flex-col lg:flex-row justify-center items-center p-4 lg:p-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Contenedor de texto */}
      <motion.div className="flex w-full flex-col items-center mt-16 2xl:mt-4 md:mt-10">
        <motion.span className="text-base font-britti" variants={textVariants}>
          © Brand & Web Design by Keileth
        </motion.span>

        <motion.h1
          className="text-4xl font-britti font-medium md:text-7xl lg:text-7xl 2xl:text-9xl"
          variants={textVariants}
        >
          Crafting Identities,
        </motion.h1>

        <motion.p
          className="text-4xl font-britti font-medium md:text-7xl lg:text-7xl 2xl:text-9xl mb-8"
          variants={textVariants}
        >
          Telling Stories
        </motion.p>

        <motion.p
          className="text-xs font-britti text-center md:text-sm lg:text-sm w-full mb-8"
          variants={textVariants}
        >
          <span className="md:block 2xl:block">
            Digital designer specializing in creating impactful brands and strategic visual experiences. I blend creativity and strategy to develop memorable identities
          </span>
          <span className="md:block 2xl:block">
            that truly connect with audiences. With proficiency in English and Spanish, I transform ideas into effective visual solutions. Additionally, I specialize in web
          </span>
          <span className="md:block 2xl:block">
           web design, crafting visually appealing and functional interfaces that enhance a brand’s digital presence. My goal is to merge aesthetics and usability to 
          </span>
          <span className="md:block 2xl:block">
            tell stories that leave a lasting impression.
          </span>
        </motion.p>

           

        <motion.a
          target="_blank"
          href="https://mail.google.com/mail/?view=cm&to=contact@keilethcxst.com" 
          className="inline-flex font-britti items-center text-lg border text-black bg-white px-6 py-3 rounded-full"
          variants={textVariants}
        >
          CONTACT US
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Home;
