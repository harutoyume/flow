import React from "react";
import { ChartNoAxesGantt } from "lucide-react";
import { ModeToggle } from "@/components/Theme/ModeToggle";

const AppNavigation = () => {
  return (
    <nav className="z-50 fixed w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="p-3 flex justify-between ">
        <h1 className="flex flex-row gap-x-1 items-center text-xl font-bold">
          <ChartNoAxesGantt size={24} strokeWidth={3} /> flow{" "}
          <span className="font-light">demo</span>
        </h1>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default AppNavigation;
