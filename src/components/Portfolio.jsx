import React from "react";

import project1 from "../assets/project1.jpeg";
import blog_post from "../assets/blog_post.jpg"
import ipl from "../assets/ipl.jpg"
import movie from "../assets/movie.jpg"



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
      href: "https://github.com/manan9898/React-Project-Hotel-Room-Booking-main/tree/main/react-beach-resort-dev",
      title:"React-Project-Hotel-Room-Booking"
    },
    {
      id: 2,
      src: blog_post,
      href:"https://github.com/manan9898/blog_app",
      title:"React Node.js Full Stack Blog APP"
    },
    {
      id: 3,
      src: ipl,
      href:"https://manan9898.herokuapp.com/",
      title:"IPL First Innings Score Prediction – Deployment"
    },
    {
      id: 4,
      src: movie,
      href:"https://manan14.herokuapp.com/",
      title:"Movie Recommendation System"
    },
   
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-10 px-10 sm:px-0 mb-24">
          {portfolios.map(({ id, src, href ,title}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
             
             <div> 
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center my-1 border-2 shadow-md ">{title}</div>
              </div>
              <div className="flex items-center justify-center my-1">
              <a
              href={href}
              
             
              target="_blank"
              rel="noreferrer"
                 >
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
