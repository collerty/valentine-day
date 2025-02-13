"use client"
import {useState} from "react";
import {motion} from "framer-motion";
import clsx from "clsx";

export function Close() {
  const [isShown, setIsShown] = useState(true);

  function handleClose() {
    setIsShown(false);
  }

  return (
      <motion.button
          className={clsx("rounded-full text-white bg-rose-950 w-10 h-10 font-bold cursor-auto")}
          initial={{scale: 1}}
          animate={{scale: isShown ? 1 : 0}}
          transition={{duration: 0.5}}
          onMouseEnter={handleClose}
      >X</motion.button>
  )
}