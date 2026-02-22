import React from "react";
import { ArrowLeft } from "./icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { kidCudi,lorenzo,smiths,billy,tvGirl,sheAndHim,sunsetz,booba } from "../assets";

function Music() {
  const navigate = useNavigate();
  // je pourrais ajouter 1 propriété link qui mènerait sur la musique genre le clip ou autre
  const songs = [
    {
      title: "Willing To Trust",
      artist: "Kid Cudi",
      albumCover: kidCudi, 
      left: "5%",
      top: "2%",
    },
    {
      title: "Back to the old house",
      artist: "The Smiths",
      albumCover: smiths, 
      left: "40%",
      top: "13%",
    },
    {
      title: "Sunsetz",
      artist: "Cigarettes After Sex",
      albumCover: sunsetz, 
      left: "10%",
      top: "25%",
    },
     {
      title: "Scarface",
      artist: "Booba",
      albumCover: booba, 
      left: '35%',
      top: '38%',
    },
     {
      title: "Eyes Without A Face",
      artist: "Billy Idol",
      albumCover: billy, 
      left: '15%',
      top: '50%',
    },
    {
      title: "Loving Machine",
      artist: "Tv Girl",
      albumCover: tvGirl, 
      left: '30%',
      top: '63%',
    },
    {
      title: "I thought i saw your face today",
      artist: "She and Him",
      albumCover: sheAndHim, 
      left: '5%',
      top: '74%',
    },
    {
      title: "MBK Rocket",
      artist: "Lorenzo",
      albumCover: lorenzo, 
      left: '25%',
      top: '86%',
    },
  ];
  const containerRef = useRef(null);

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
    <div className="w-[90%] max-w-[400px]">
      <h1 className="text-2xl sm:text-2xl font-bold -mb-4 mt-4 drop-shadow-lg text-white text-center">
        Songs that remind me of you
      </h1>

      <div ref={containerRef}  className=" relative w-full h-[40rem] rounded-lg overflow-hidden mt-8 mb-12">
        {songs.map((song, index) => (
          <motion.div
            key={index}
            className="absolute" // Use absolute positioning
            style={{
              left: song.left,
              top: song.top,
            }}
            drag
            dragConstraints={containerRef} // Adjust to container size
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 flex items-center gap-4 w-56 h-[4rem]">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src={song.albumCover}
                  alt="Album cover"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-white font-medium text-sm truncate">
                  {song.title}
                </h2>
                <p className="text-white/70 text-xs truncate">{song.artist}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Button */}
      <div className="flex justify-center w-full mt-4 mb-4">
        <button
          className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
          onClick={() => navigate("/recap")}
        >
          <ArrowLeft /> Previous page
        </button>
      </div>
    </div>
  </div>
  );
}

export default Music;
