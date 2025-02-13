'use client';
import {useState} from "react";
import clsx from "clsx";
import {motion, useAnimationControls} from "framer-motion";
import {useDebouncedCallback} from "use-debounce";
import Link from "next/link";
import {cn} from "@/app/lib/utils";
import {useRouter} from "next/navigation";


interface Stage {
  x: string,
  y: string,
  rotate?: number,
  width?: string
}

const desktopStages: Stage[] = [
  {x: "-50%", y: "150%", width: "9rem"},
  {x: "-200%", y: "-150%", width: "9rem"},
  {x: "10%", y: "0", width: "9rem"},
  {x: "-75%", y: "0", width: "3.5rem", rotate: 0},
  {x: "-20%", y: "0", width: "3.5rem", rotate: 10}
];

const mobileStages: Stage[] = [
  {x: "-50%", y: "150%", width: "8rem"},
  {x: "50%", y: "-150%", width: "8rem"},
  {x: "10%", y: "0", width: "8rem"},
  {x: "180%", y: "-122%", width: "3.5rem", rotate: 0},
  {x: "235%", y: "-122%", width: "3.5rem", rotate: 10}
];

export function No({isMobile}: { isMobile: boolean }) {
  const controls = useAnimationControls();
  const stages = isMobile ? mobileStages : desktopStages;
  const [currentStage, setCurrentStage] = useState(0);
  const finalStage = stages.length - 1;
  const [isFinished, setIsFinished] = useState<boolean>(false);

  async function animate(index: number) {
    console.log(index);
    const stage = stages[index];
    await controls.start({
      x: stage.x,
      y: stage.y,
      width: typeof stage?.width === 'string' ? stage.width : undefined,
      rotate: typeof stage?.rotate === 'number' ? stage.rotate : undefined,
      transition: {duration: 0.3},
    })
  }

  const router = useRouter();
  const handleNo = useDebouncedCallback(async () => {
    await animate(currentStage);
    if (currentStage === finalStage) {
      if (isFinished && isMobile) {
        router.push("/no");
      } else {
        setIsFinished(true);
      }
    }
    if (currentStage != finalStage) setCurrentStage(prevState => prevState + 1);
  }, 300)

  return (
      <Link href={currentStage > 3 && !isMobile ? "/no" : "/"} className="relative sm:w-36 w-32 h-14">
        <motion.button
            className={cn("w-full h-full text-white bg-rose-950 rounded-2xl absolute drop-shadow-lg", isMobile ? "" : "")}
            animate={controls}
            onMouseEnter={!isMobile ? handleNo : undefined}
            onMouseLeave={currentStage === finalStage ? async () => await animate(finalStage - 1) : () => {
            }}
            onTap={isMobile ? handleNo : undefined}
        >No
        </motion.button>
      </Link>
  )
}
