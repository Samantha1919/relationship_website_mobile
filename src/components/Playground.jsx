import { useRef } from "react";
import {
  basket,
  iceCream,
  biscuit,
  mochis,
  kitkat,
  macaron,
  dango,
  mochi,
  milk,
} from "../assets";
import { motion } from "motion/react";

// plus tu veux descendre plsu tu augemntes le top
// plus tu. veux mettre a droite plus tu augmentes le left et dcp tu le. baisses pr aller a gauche

function Playground() {
  const containerRef = useRef(null);

  const foods = [
    {
      img: iceCream,
      foodName: "ice cream",
      left: "5%",
      top: "2%",
    },
    {
      img: biscuit,
      foodName: "biscuit",
      left: "20%",
      top: "73%",
    },
    {
      img: mochis,
      foodName: "mochis",
      left: "10%",
      top: "25%",
    },
    {
      img: kitkat,
      foodName: "kitkat",
      left: "75%",
      top: "38%",
    },
    {
      img: macaron,
      foodName: "macaron",
      left: "15%",
      top: "60%",
    },
    {
      img: dango,
      foodName: "dango",
      left: "70%",
      top: "63%",
    },
    {
      img: mochi,
      foodName: "mochi",
      left: "65%",
      top: "74%",
    },
    {
      img: milk,
      foodName: "milk",
      left: "85%",
      top: "67%",
    },
  ];

  const foodChoosen = foods[Math.floor(Math.random() * foods.length)].foodName;

  // si la foods.img = foodChoosen ducoup cest la food.img qu'il faut deplacer et regarder si elle est en contact avec le panier

  //  let basket = document.getElementById();

  return (
    <div className="max-h-screen bg-[#fbf1fb] relative">
      <h1 className="text-4xl font-bold mb-8 text-black text-center">
        Playground time !
      </h1>

      <h2 className="text-center">Put the {foodChoosen} in basket</h2>

      <div
        ref={containerRef}
        className="relative min-h-screen rounded-lg overflow-hidden mt-8 mb-12"
      >
        <div className="flex justify-center mt-12">
          <img src={basket} className=" w-[700px] h-[700px]" />
        </div>

        {foods.map((img, index) => (
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
              className="rounded-md object-cover h-[150px] w-auto"
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
