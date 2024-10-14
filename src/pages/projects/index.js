"use client";

import ProjectItem from "@/components/ProjectItem";

function projects() {
  return (
    <main className="mt-8 flex flex-col items-center gap-8 pb-10">
      <div className="w-[500px]">
        <p className="text-center text-xl font-bold md:text-2xl lg:text-3xl">
          Projects
        </p>
      </div>

      <ul className="grid grid-cols-[1fr_1fr_1fr] gap-6">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </ul>
    </main>
  );
}

export default projects;
