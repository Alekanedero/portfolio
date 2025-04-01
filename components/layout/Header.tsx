"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Typography } from "../ui/typography";
import { LinkedinIcon } from "@/public/icons/LinkededIcon";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/public/icons/GithubIcon";
import { WhatsappIcon } from "@/public/icons/WhatsappIcon";
import { GmailIcon } from "@/public/icons/GmailIcon";

export function Header() {
  return (
    <header className="bg-background top-0 w-full">
      <div className="flex h-16 flex-row items-center max-sm:flex-col max-sm:gap-4 sm:justify-between">
        <h1 className="flex items-baseline justify-center gap-2 ">
          <Typography variant="h3" as={Link} href="/">
            alexandrecompin.vercel.app
          </Typography>
        </h1>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {/* <AuthButton /> */}
            <ul className="flex items-center gap-2">
              <Link
                title="Visit my LinkedIn profile"
                href="https://www.linkedin.com/in/alexandre-compin-062a03177/"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "m-0 flex size-8 items-center justify-center p-0"
                )}
              >
                <LinkedinIcon size={20} className="text-foreground" />
              </Link>
              <Link
                title="Visit my GitHub profile"
                href="https://github.com/Alekanedero"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "m-0 flex size-8 items-center justify-center p-0"
                )}
              >
                <GithubIcon size={23} className="text-foreground" />
              </Link>
              <Link
                href="https://wa.me/33618250758"
                title="Send my a message on whatsapp"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "m-0 flex size-8 items-center justify-center p-0"
                )}
              >
                <WhatsappIcon size={25} className="text-foreground" />
              </Link>
              <Link
                href="mailto:alexandrecompin@gmail.com?subject=Demande%20d%27information&body=Bonjour,%0D%0AJe%20souhaite%20avoir%20plus%20d%27informations."
                title="Send my a mail"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "m-0 flex size-8 items-center justify-center p-0"
                )}
              >
                <GmailIcon size={25} className="text-foreground" />
              </Link>
            </ul>
            <div className="ml-8">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
