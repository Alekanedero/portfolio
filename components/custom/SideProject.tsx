import Link from "next/link";

export type SideProjectProps = {
  Logo: React.ReactNode;
  title: string;
  description: string;
  url: string;
};

export const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="hover:bg-secondary/40 border-secondary inline-flex w-full h-full items-center gap-4 rounded-md border p-1 pl-2 shadow-sm transition-colors duration-300 ease-in-out hover:translate-y-[-1px] hover:scale-[1.01] hover:shadow-lg"
    >
      <span className="bg-secondary size rounded-sm p-2">{props.Logo}</span>

      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-muted-foreground text-sm">{props.description}</p>
      </div>
    </Link>
  );
};
