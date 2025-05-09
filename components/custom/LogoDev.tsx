"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { Loader } from "../ui/Loader";
import Image from "next/image";

export type LogoDevProps = {
  src: string;
  alt: string;
  title?: string;
  text?: string;
  isActiveThemeWhite?: boolean;
  isActiveThemeBlack?: boolean;
  whitoutBorder?: boolean;
};

export const LogoDev = ({
  src,
  alt,
  title,
  text,
  isActiveThemeWhite = false,
  isActiveThemeBlack = false,
  whitoutBorder = false,
}: LogoDevProps) => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Évite l'erreur d'hydratation en rendant un fallback avant le montage
  if (!mounted) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        <div className="w-10 h-10 md:w-16 md:h-16 bg-secondary rounded-lg animate-pulse flex items-center justify-center">
          <Loader size={16} />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className=" md:w-22 md:h-6"></Skeleton>
          <Skeleton className=" md:w-38 md:h-4"></Skeleton>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row items-center gap-4">
      <div
        className={cn(
          " hover:translate-y-[-1px] hover:scale-[1.01] md:w-16 md:h-16 w-10 h-10 p-[6] md:p-2 border border-dashed border-gray-600 rounded-lg flex items-center justify-center duration-300 hover:border-gray-200",
          resolvedTheme === "light"
            ? "border-gray-950 hover:border-gray-400"
            : "",
          whitoutBorder ? "border-none" : ""
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={40}
          height={40}
          className={cn(
            "md:w-16 md:h-16 w-10 h-10",
            isActiveThemeBlack && resolvedTheme === "dark"
              ? "invert brightness-0"
              : "",
            isActiveThemeWhite && resolvedTheme === "light" ? "invert" : "",
            theme === "light" ? "hover:border-gray-800" : ""
          )}
        />
      </div>
      <div className="flex flex-col">
        <p className="text-sm md:text-lg font-semibold">{title}</p>
        <p className="text-gray-400 md:text-sm text-xs">{text}</p>
      </div>
    </div>
  );
};
