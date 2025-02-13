import Link from "next/link";
import {cn} from "@/app/lib/utils";

export function Yes({isMobile} : {isMobile: boolean}) {
  return (
      <Link href="/yes" className="relative sm:w-36 w-32 h-14">
        <button
            className={cn("w-full h-full text-white bg-pink-600 rounded-2xl absolute drop-shadow-lg z-20", isMobile ? "left-0" : " left-0")}>Yes
        </button>
      </Link>
  )
}

// export function Yes({isMobile} : {isMobile: boolean}) {
//   return (
//       <Link href="/yes">
//         <button
//             className="w-36 h-14 text-white bg-pink-600 rounded-2xl drop-shadow-lg absolute left-40 z-20">Yes
//         </button>
//       </Link>
//   )
// }