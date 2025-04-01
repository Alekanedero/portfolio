"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

type CourseProps = {
  certificat: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  Logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  urlSchool: string;
  title: string;
  description: string;
  text: string;
};

export const CourseDialog = (props: CourseProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="p-7 hover:bg-secondary/40 border-secondary bg-ghost inline-flex w-full cursor-pointer items-center justify-start gap-4 rounded-md border pl-2 shadow-sm transition-colors duration-300 ease-in-out hover:translate-y-[-1px] hover:scale-[1.01] hover:shadow-lg"
          asChild
          onClick={() => setOpen(true)}
          role="div"
        >
          <div>
            <Image
              src={props.Logo.src}
              alt={props.Logo.alt}
              width={props.Logo.width}
              height={props.Logo.height}
              className="rounded-sm"
            />
            <div>
              <p className="text-lg font-semibold">{props.title}</p>
              <p className="text-muted-foreground text-sm">
                {props.description}
              </p>
            </div>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="border-secondary border transition-transform duration-300 ease-in-out sm:max-w-[800px] overflow-y-auto max-h-[80vh]">
        <div className="p-4">
          <DialogTitle>
            <p className="text-lg font-semibold">{props.title}</p>
          </DialogTitle>
          <p className="text-muted-foreground mt-8 ">{props.text}</p>
          <Link
            href={props.urlSchool}
            className={`${buttonVariants({
              size: "sm",
              variant: "primary",
            })} mt-8`}
          >
            Visit my school
          </Link>
          <div className="mt-20 flex gap-2 flex-col items-center justify-center">
            <p className="">Certificate</p>
            <Image
              src={props.certificat.src}
              alt={props.certificat.alt}
              width={props.certificat.width}
              height={props.certificat.height}
              className="object-cover rounded-md shadow-lg hover:scale-150 transition-transform duration-300 ease-in-out"
              quality={100}
              priority
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

{
  /* <DialogContent className="border-secondary border transition-transform duration-300 ease-in-out sm:max-w-[800px]">
        <div className="p-4">
          <DialogTitle>
            <p className="text-lg font-semibold">{props.title}</p>
          </DialogTitle>
          <p className="text-muted-foreground mt-8 ">{props.text}</p>
          <Link
            href={props.urlSchool}
            className={`${buttonVariants({
              size: "sm",
              variant: "primary",
            })} mt-8`}
          >
            Visit my school
          </Link>
          <div className="mt-20 flex gap-2 flex-col items-center justify-center">
            <p className="">Certificate</p>
            <Image
              src={props.certificat.src}
              alt={props.certificat.alt}
              width={props.certificat.width}
              height={props.certificat.height}
              className="object-cover rounded-md shadow-lg hover:scale-150 transition-transform duration-300 ease-in-out"
              quality={100}
              priority
            />
          </div>
        </div>
      </DialogContent> */
}
