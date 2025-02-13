"use client";
import {motion} from "framer-motion"

const variants = {
  hidden: {opacity: 0, x: -10, y: 0},
  enter: {opacity: 1, x: 0, y: 0},
}

export default function Template({children}: { children: React.ReactNode }) {
  return (
    <motion.div className="sm:min-w-[22rem] w-full sm:w-[39rem] h-[32rem] bg-white rounded-2xl relative"
                variants={variants}
                initial="hidden"
                animate="enter"
                transition={{type: "linear"}}>
      {children}
    </motion.div>
  )
}