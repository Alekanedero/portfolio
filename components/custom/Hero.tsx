import Image from "next/image";
import alex from "@/public/images/alex.png";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { NextIcon } from "@/public/icons/NextIcon";
import flagswiss from "@/public/images/flagswiss.png";

export const Code = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-secondary hover:bg-secondary/50 border-secondary radius- rounded-sm border px-1 py-0.5 font-mono font-light transition-colors",
        className
      )}
      {...props}
    />
  );
};

export const Hero = () => {
  return (
    <div className="flex gap-4 max-md:flex-col">
      <div className="flex flex-2 flex-col items-start justify-center gap-2">
        <h2 className="font-caption text-5xl font-bold ">Alexandre Compin</h2>
        <h3 className="font-caption font-sm mb-4 text-3xl text-neutral-400">
          Fullstack Web Developer
        </h3>
        <p className="font-light mt-8">
          I love creating apps with
          <Code className="mr-2 ml-2 inline-flex items-center gap-1">
            <NextIcon size={12} />
            Next.js
          </Code>
          , taking advantage of TypeScript, Tailwind, and Prisma for
          high-performance, elegant solutions. I live in{" "}
          <Code className="mr-2 inline-flex items-center gap-1">
            <Image src={flagswiss} alt="flag suisse" height={15} width={15} />
            Lausanne
          </Code>
          .
        </p>
      </div>
      <div className="ml-auto flex-1 max-md:m-auto">
        <Image
          src={alex}
          alt="Alex' picture"
          width={200}
          height={200}
          className="max-wxs h-auto w-full max-md:w-56 rounded-full object-cover"
        />
      </div>
    </div>
  );
};
