import { LogoDev } from "./LogoDev";
import logoNext from "@/public/logodev/logoNext.svg";
import logoJs from "@/public/logodev/logoJs.svg";
import logoTailwind from "@/public/logodev/logoTailwind.svg";
import logoReact from "@/public/logodev/logoReact.svg";
import logoTs from "@/public/logodev/logoTs.svg";
import logoShadcn from "@/public/logodev/logoShadcn.svg";
import logoPrisma from "@/public/logodev/logoPrisma.svg";
import logoGit from "@/public/logodev/logoGit.svg";

export const Skill = () => {
  return (
    <div className="flex flex-col items-start gap-4">
      <h2 className="scroll-m-20 pb-2 md:text-3xl text-xl">
        I love working on...
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 ">
        <LogoDev
          src={logoNext}
          alt="Next Icon"
          title="Next Js"
          text="React Framework"
          isActiveThemeBlack
        />
        <LogoDev
          src={logoJs}
          alt="JavaScript Icon"
          title="Javascript"
          text="Programming Language"
        />
        <LogoDev
          src={logoTailwind}
          alt="Tailwind Icon"
          title="Tailwind CSS"
          text="CSS Framework"
        />
        <LogoDev
          src={logoReact}
          alt="React Icon"
          title="React"
          text="Javascript Framework"
        />
        <LogoDev
          src={logoTs}
          alt="Typescript Icon"
          title="Typescript"
          text="Typed Programming Language"
        />
        <LogoDev
          src={logoShadcn}
          alt="Github Icon"
          title="Shadcn"
          text="CSS Framework"
          isActiveThemeBlack
        />
        <LogoDev
          src={logoPrisma}
          alt="Prisma Icon"
          title="Prisma"
          text="ORM Database"
        />
        <LogoDev
          src={logoGit}
          alt="Github Icon"
          title="GitHub"
          text="Code Hosting Platform"
          isActiveThemeWhite
        />
      </div>
    </div>
  );
};
