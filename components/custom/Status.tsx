"use client";

import { CourseDialog } from "./CourseDialog";
import { COURSES } from "@/lib/COURSES";
import { SIDE_PROJECTS } from "@/lib/SIDE_PROJECTS";
import { SideProject } from "./SideProject";
import { Card } from "../ui/card";
import { ContactCard } from "./ContactCard";

export const Status = () => {
  return (
    <div className="gap-4 max-lg:flex-col flex">
      <div className="w-full flex-2 ">
        <Card className="flex w-full h-full flex-col items-start justify-start gap-2 p-4 ">
          <p className="text-secondary-foreground mb-4 text-lg">
            Side, fun projects
          </p>
          <div className="flex w-full flex-col gap-4 mb-full">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex w-full flex-1 flex-col gap-4 max-md:m-auto">
        <Card className="w-full flex-1 items-start p-4">
          <p className="text-secondary-foreground text-lg">My web courses</p>
          <div className="flex w-full flex-col gap-4">
            {COURSES.map((course, index) => (
              <CourseDialog
                key={index}
                description={course.description}
                Logo={course.Logo}
                title={course.title}
                text={course.text}
                certificat={course.certificat}
                urlSchool={course.urlSchool}
              />
            ))}
          </div>
        </Card>
        <Card className=" flex-1 gap-4 p-4 w-full">
          <p className="text-secondary-foreground mb-4 text-lg">Contact me</p>
          <ContactCard
            image="/images/alex.png"
            logo="/logo/linkedin5.svg"
            name="Alexandre Compin"
            description="Profile on LinkedIn"
            url="https://www.linkedin.com/in/alexandre-compin-062a03177/"
          />
          <ContactCard
            image="/images/alex.png"
            logo="/logo/whatsappcontact.svg"
            name="Alexandre Compin"
            description="Contact me on WhatsApp"
            url="https://wa.me/33618250758"
          />
        </Card>
      </div>
    </div>
  );
};
