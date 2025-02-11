"use client";

import React from "react";
import Slider from "react-slick";
import { Tag } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
  {
    id: 1,
    image: "https://i.pinimg.com/474x/0f/24/92/0f2492d24c9a287cb34ad06a569dc6d9.jpg",
    title: "Proyecto 1",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    id: 2,
    image: "https://i.pinimg.com/236x/6f/f8/d2/6ff8d274125a19a9b2dfeba9b93c8209.jpg",
    title: "Proyecto 2",
    tags: ["JavaScript", "Motion", "UI/UX"],
  },
  {
    id: 3,
    image: "https://i.pinimg.com/474x/f1/d5/31/f1d5317a8ba4abc88f5928f57a2b830a.jpg",
    title: "Proyecto 3",
    tags: ["CSS", "Animations", "Frontend"],
  },
  {
    id: 4,
    image: "https://i.pinimg.com/736x/dc/27/10/dc2710bbb7e74403b9e98e345d173e95.jpg",
    title: "Proyecto 4",
    tags: ["HTML", "Web Design", "Graphics"],
  },
];

const Work = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div id="work" className="bg-black  z-0 min-h-screen py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center ">
      <div className="w-full z-0 2xl:w-[70vw] ">
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="p-4 rounded-lg">
              <div className="bg-[#0A0A0B] z-0 rounded-xl overflow-hidden shadow-lg flex flex-col">
                <div className="h-[55vh] p-6 flex justify-center items-center">
                  <img src={card.image} alt={card.title} className="h-[50vh] w-[70vw] rounded-md object-contain" />
                </div>
                <div className="bg-[#0A0A0B] p-4 flex flex-col items-center">
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <div className="flex gap-2 mt-2 flex-wrap justify-center">
                    {card.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 bg-[#1C1C1C]  text-gray-300 text-xs px-2 py-1 rounded-full"
                      >
                        <Tag className="text-xs text-gray-400" /> {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Work;
