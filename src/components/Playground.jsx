import React, { useRef, useEffect } from "react";
import { basket, iceCream, biscuit, mochi, kitkat, macaron } from "../assets";

function Playground() {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;

    let isDragging = false;
    let offsetX, offsetY;

    const handleMouseDown = (e) => {
      isDragging = true;
      offsetX = e.clientX - img.offsetLeft;
      offsetY = e.clientY - img.offsetTop;
      img.style.cursor = "grabbing";
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;

      img.style.left = e.clientX - offsetX + "px";
      img.style.top = e.clientY - offsetY + "px";
    };

    const handleMouseUp = () => {
      isDragging = false;
      img.style.cursor = "grab";
    };

    img.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    // cleanup important !!
    return () => {
      img.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="min-h-screen bg-green-200 relative">
      <h1 className="text-4xl font-bold mb-8 text-white text-center">
        Playground time !
      </h1>

      <img src={basket} alt="" />
      <img
        src={iceCream}
        ref={imgRef}
        className="absolute cursor-grab"
        alt=""
      />
      <img src={biscuit} alt="" />
      <img src={mochi} alt="" />
      <img src={kitkat} alt="" />
      <img src={macaron} alt="" />
    </div>
  );
}

export default Playground;
