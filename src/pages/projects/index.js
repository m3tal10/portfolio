"use client";

import ProjectItem from "@/components/ProjectItem";

function projects() {
  return (
    <main className="mt-8 flex flex-col items-center gap-8 pb-5 lg:pb-10">
      <p className="text-center text-xl font-bold md:text-2xl lg:text-3xl">
        Projects
      </p>

      <ul className="grid grid-cols-2 gap-6 p-3 lg:grid-cols-3 lg:p-0">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </ul>
    </main>
  );
}

export default projects;
