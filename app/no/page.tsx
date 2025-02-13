import Link from "next/link";
import {Back} from "@/app/ui/buttons/back";

export default function Page() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full pl-4 pt-4">
        <Back/>
      </div>
      <div className="flex flex-col w-full px-16 grow justify-around md:pb-4">
        <div>
          <h1 className="text-2xl font-bold pb-6">Try Valentine Plus today!</h1>
          <ul className="[&_li]:py-0.5 list-none">
            <li><span className="text-rose-500 font-bold">&#10003;</span> Unlock the full valentine experience</li>
            <li><span className="text-rose-500 font-bold">&#10003;</span> 10 credits to use the "No" button</li>
            <li><span className="text-rose-500 font-bold">&#10003;</span> No ads</li>
          </ul>
        </div>
        <div className="flex flex-row gap-2 mt-[-2rem]">
          <div className="flex flex-col basis-1/2 bg-black rounded-lg justify-center p-4">
            <h1 className="font-bold text-white text-sm">$999 Annual</h1>
            <p className="text-gray-500 text-sm hidden sm:inline">$84 per month</p>
          </div>
          <div className="flex flex-col basis-1/2 bg-[#ece0e0] rounded-lg justify-center p-4">
            <h1 className="font-bold text-black text-sm">$99 Monthly</h1>
            <p className="text-gray-500 text-sm hidden md:inline">First 7 days free!</p>
          </div>
        </div>
        <div className="sm:my-[-2.5rem]">
          <p>Or just say Yes...</p>
        </div>
        <Link href="/yes">
          <button
              className="w-full h-14 text-white bg-pink-600 rounded-2xl drop-shadow-lg">Yes
          </button>
        </Link>
      </div>
    </div>
  )
}