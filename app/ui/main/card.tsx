"use client"
import {useMediaQuery} from "@/app/lib/use-media-query";
import {Yes} from "@/app/ui/buttons/yes";
import {No} from "@/app/ui/buttons/no";

export function Card() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  return (
      <div className="basis-1/2 flex flex-col sm:flex-row justify-center sm:items-start items-center sm:mt-0 -mt-16 gap-3">
        <Yes key="yes" isMobile={isMobile}/>
        <No key="no" isMobile={isMobile}/>
      </div>
  )
}