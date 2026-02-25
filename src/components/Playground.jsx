import { useRef, useEffect } from "react";
import {
  basket,
  iceCream,
  biscuit,
  mochi,
  kitkat,
  macaron,
  lorenzo,
  kidCudi,
  sunsetz,
} from "../assets";
import { motion } from "motion/react";

// plus tu veux descendre plsu tu augemntes le top
// plus tu. veux mettre a droite plus tu augmentes le left et dcp tu le. baisses pr aller a gauche

function Playground() {
  const containerRef = useRef(null);

  const images = [
    {
      img: iceCream,
      left: "5%",
      top: "2%",
    },
    {
      img: biscuit,
      left: "20%",
      top: "73%",
    },
    {
      img: mochi,
      left: "10%",
      top: "25%",
    },
    {
      img: kitkat,
      left: "65%",
      top: "38%",
    },
    {
      img: macaron,
      left: "15%",
      top: "60%",
    },
    {
      img: lorenzo,
      left: "70%",
      top: "63%",
    },
    {
      img: kidCudi,
      left: "65%",
      top: "74%",
    },
    {
      img: sunsetz,
      left: "85%",
      top: "67%",
    },
  ];

  return (
    <div className="max-h-screen bg-green-200 relative">
      <h1 className="text-4xl font-bold mb-8 text-white text-center">
        Playground time !
      </h1>

      <div
        ref={containerRef}
        className=" relative min-h-screen rounded-lg overflow-hidden mt-8 mb-12"
      >
        <img
          src={basket}
          className="absolute top-[15%] left-[35%] w-[600px] h-[600px]"
        />

        {images.map((img, index) => (
          <motion.div
            key={index}
            className="absolute" // Use absolute positioning
            style={{
              left: img.left,
              top: img.top,
            }}
            drag
            dragConstraints={containerRef} // Adjust to container size
          >
            <img
              src={img.img}
              alt=""
              className="rounded-md object-cover h-[100px] w-auto"
              draggable="false" // on a mis ca pr dire quon veut pas deplacer limage mais la div qui est au dessus qui contient limage
            />
          </motion.div>
        ))}
      </div>
      <div />
    </div>
  );
}

export default Playground;
