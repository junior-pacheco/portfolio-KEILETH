import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";

const projects = [
  {
    images: [
      "/img/DepthNation (4).jpg",
      "/img/DepthNation (2).jpg",
      "/img/DepthNation (3).jpg",
      "/img/DepthNation (1).jpg"
    ],
    title: "DepthNation",
    tools: ["Branding","logo"],
  },
  {
    images: [
      "/img/Grafft (1).jpg",
      "/img/Grafft (2).jpg",
      "/img/Grafft (3).jpg",
      "/img/Grafft (4).jpg"
    ],
    title: "Grafft",
    tools: ["Branding","logo"],
  },
  {
    images: [
      "/img/Novum (1).jpg",
      "/img/Novum (2).jpg",
      "/img/Novum (3).jpg",
      "/img/Novum (4).jpg"
    ],
    title: "Novum",
    tools: ["Branding","logo"],
  },
  {
    images: [
      "/img/Recove (1).jpg",
      "/img/Recove (2).jpg",
      "/img/Recove (3).jpg",
      "/img/Recove (4).jpg"
    ],
    title: "Recove",
    tools: ["Branding","logo"],
  },
  {
    images: [
      "/img/Logofolio V1 (1).jpg",
      "/img/Logofolio V1 (2).jpg",
      "/img/Logofolio V1 (3).jpg",
      "/img/Logofolio V1 (4).jpg",
      "/img/Logofolio V1 (5).jpg",
      "/img/Logofolio V1 (6).jpg",
      "/img/Logofolio V1 (7).jpg",
      "/img/Logofolio V1 (8).jpg"
    ],
    title: "Logofolio V1",
    tools: ["logos"],
  },
];


import Skeleton from "react-loading-skeleton";
type Project = {
  images: string[];
  title: string;
  tools: string[];
};


const Work = ({ hiddenWork }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loadingImages, setLoadingImages] = useState({});

  // Pre-cargar imágenes de portada
  useEffect(() => {
    projects.forEach((project, index) => {
      const img = new Image();
      img.src = project.images[0];
      img.onload = () => {
        setLoadingImages((prev) => ({ ...prev, [index]: false }));
      };
    });
  }, []);

  const handleImageLoad = (index) => {
    setLoadingImages((prev) => ({ ...prev, [index]: false }));
  };

  // Evitar doble scroll en móvil cuando un proyecto está abierto
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <div id="work" className="bg-[#0A0A0B] text-white min-h-screen flex flex-col items-center p-4 lg:p-20">
      <h2 className="text-4xl font-britti font-medium mb-8 self-center md:ms-24 2xl:ms-1">Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className={`space-y-2 ${hiddenWork && "hidden"}`}>
              <div className="relative w-full h-64">
                {loadingImages[index] !== false && (
                  <Skeleton
                    className="absolute inset-0 w-full h-full"
                    borderRadius={12}
                    baseColor="#333"
                    highlightColor="#555"
                  />
                )}
                <img
                  src={project.images[0]}
                  className={`w-full h-64 object-cover rounded-lg transition-opacity duration-500 ${
                    loadingImages[index] !== false ? "opacity-0" : "opacity-100"
                  }`}
                  onLoad={() => handleImageLoad(index)}
                  onError={() => handleImageLoad(index)}
                />
              </div>
            </div>
            <div className={`space-y-2 ${hiddenWork && "hidden"}`}>
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 p-4 rounded-b-lg">
                <h3 className="text-lg font-britti font-medium">{project.title}</h3>
                <p className="text-sm font-britti text-gray-400">{project.tools.join(" • ")}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black  flex flex-col items-center justify-center p-4 z-50 overflow-y-auto w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button
              className="absolute top-5 right-5 text-white text-3xl"
              onClick={() => setSelectedProject(null)}
            >
              ✖
            </button>
            <motion.h2
              className="text-3xl font-britti font-medium mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {selectedProject.title}
            </motion.h2>
            <motion.p
              className="text-lg font-britti text-gray-400 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {selectedProject.tools.join(" • ")}
            </motion.p>

            <div className="w-full max-w-6xl p-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 md:max-h-[80vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedProject.images.map((image, i) => (
                <motion.div
                  key={i}
                  className="relative w-full h-72"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 * i }}
                >
                  <img
                    src={image}
                    className="w-full h-72 rounded-lg object-contain transition-opacity duration-500"
                    onLoad={() => handleImageLoad(i)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default Work;


