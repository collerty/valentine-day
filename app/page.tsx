import {Card} from "@/app/ui/main/card";
import {Close} from "@/app/ui/buttons/close";

export default function Home() {
  return (
      <div className="flex flex-col flex-shrink h-full w-full">
        <div className="w-full h-20 flex items-center justify-end pr-5">
          <Close/>
        </div>
        <div className="grow flex flex-col">
          <div className="basis-1/2 flex items-center justify-center">
            <h1 className="font-bold text-3xl max-w-64 text-center">Will you be my <span
                className="gradient-text text-transparent animate-gradient">valentine</span>?</h1>
          </div>
          <Card/>
        </div>
      </div>

  );
}
