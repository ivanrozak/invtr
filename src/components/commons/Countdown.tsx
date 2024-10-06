"use client";
import { ivy } from "@/app/fonts";
import useCountDown from "@/hooks/useCountdown";
import { cn } from "@/lib/utils";
import React from "react";

const Countdown = () => {
  const countdown = useCountDown({ dueDate: "2024-11-05T11:00:00" });
  return (
    <div
      className={cn(
        ivy.className,
        "mt-8 flex justify-center items-center tracking-wider divide-x"
      )}
    >
      <div className="py-1 min-w-[40px] px-3">
        <div className="text-2xl font-bold">{countdown?.days || "0"}</div>
        <p className="text-sm">Day(s)</p>
      </div>

      <div className="py-1 min-w-[40px] px-3">
        <div className="text-2xl font-bold">{countdown?.hours || "0"}</div>
        <p className="text-sm">Hour(s)</p>
      </div>

      <div className="py-1 min-w-[40px] px-3">
        <div className="text-2xl font-bold">{countdown?.minutes || "0"}</div>
        <p className="text-sm">Min(s)</p>
      </div>

      <div className="py-1 min-w-[40px] px-3">
        <div className="text-2xl font-bold">{countdown?.seconds || "0"}</div>
        <p className="text-sm">Sec(s)</p>
      </div>
    </div>
  );
};

export default Countdown;
