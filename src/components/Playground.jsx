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
import "./Playground.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "./icons";

// plus tu veux descendre plus tu augmentes le top
// plus tu veux mettre a droite plus tu augmentes le left et dcp tu le baisses pr aller a gauche

function Playground() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [canDragItems, setCanDragItems] = useState(true);

  const foods = [
    {
      img: iceCream,
      foodName: "ice-cream",
      left: "5%",
      top: "2%",
    },
    {
      img: biscuit,
      foodName: "biscuit",
      left: "20%",
      top: "39%",
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
      left: "90%",
      top: "23%",
    },
    {
      img: mochi,
      foodName: "mochi",
      left: "75%",
      top: "4%",
    },
    {
      img: milk,
      foodName: "milk",
      left: "75%",
      top: "67%",
    },
  ];

  const foodChoosen = foods[Math.floor(Math.random() * foods.length)].foodName; // genre un num aleatoire entre 0 et 7 et selectionne le foodName de cet index

  // enfaite ca cest en js ducoup forcement cv pas marcher
  // const button = document.createElement("button");
  // document.body.appendChild(button);
  // button.innerText = "Can you click me?";

  function lacheLobjet(event, info) {
    let basketImg = document.getElementById("testid"); // recupere lelement du panier
    let basketPosition = basketImg.getBoundingClientRect(); // recupere la position du panier

    // console.log("basket", basketImg); log de limage du panier
    console.log("basketpos", basketImg.getBoundingClientRect()); // log de la position du panier
    console.log("event", event); // plein dinfos sur LIMAGE
    console.log("info", info); // plein dinfos sur la POSITION
    console.log(info.point.x, info.point.y); // position de limage nourriture quon déplace

    if (
      info.point.x > basketPosition.x &&
      info.point.x < basketPosition.x + basketPosition.width &&
      info.point.y > basketPosition.y &&
      info.point.y < basketPosition.y + basketPosition.height
    ) {
      console.log("à l'intérieur"); // si lelement est a linterieur du panier
      console.log("event target", event.target.src);

      let sourceImage = event.target.src; // exemple de ce que ca retourne http://localhost:5173/src/assets/ice-cream.png  / console.log("source", sourceImage);

      if (sourceImage.includes(foodChoosen)) {
        // compare si le nom de limage inclut foodChoosen
        const reloadBtn = document.getElementById("reloadBtn"); // si lelement est le bon, la bonne nourriture

        reloadBtn.classList.toggle("hidden"); // enleve la classe hidden et ducoup le met en visible

        setCanDragItems(false);
      } else {
        console.log("Pas le bon element"); // si lelement nest pas le bon, pas la bonne nourriture
      }
    } else {
      console.log("à l'extérieur"); // si lelement est a lexterieur du panier
    }
  }

  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="max-h-screen bg-[#fbf1fb] relative">
      <h1 className="text-4xl font-bold mb-8 text-black text-center">
        Playground time !
      </h1>

      <h2 className="text-center">Put the {foodChoosen} in basket</h2>

      <div className="flex justify-around w-full testSvgDiv">
        <button
          className="px-4 py-2 flex justify-center items-center  gap-2 text-black text-sm sm:text-base border border-black/50 rounded-lg"
          onClick={() => navigate("/recap")}
        >
          <ArrowLeft /> Previous page
        </button>
        <button
          className="px-4 py-2 flex justify-center items-center  gap-2 text-black text-sm sm:text-base border border-black/50 rounded-lg"
          onClick={() => navigate("/letter")}
        >
          Next page <ArrowRight />
        </button>
      </div>

      <div className="buttonReloadDiv">
        <button id="reloadBtn" className="hidden" onClick={refreshPage}>
          Play again !
        </button>
      </div>

      <div
        ref={containerRef}
        className="relative min-h-screen rounded-lg overflow-hidden mt-8 mb-12"
      >
        <div className="flex justify-center mt-12">
          <img src={basket} className=" w-[700px] h-[700px]" id="testid" />
        </div>

        {foods.map((img, index) => (
          <motion.div
            key={index}
            className="absolute motionDiv" // Use absolute positioning
            style={{
              left: img.left,
              top: img.top,
            }}
            drag={canDragItems} //au debut elle est a true ducoup tu peux, quand tu trouves le bon objet ca la chnage a false
            dragConstraints={containerRef} // Adjust to container size
            dragMomentum={false} // evite que lobjet glisse au toucher
            onDragEnd={lacheLobjet} // quand tu laches ta souris ca appelle cette fonction
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
