"use client";

import ProjectItem from "@/components/ProjectItem";

function projects() {
  return (
    <main className="mt-8 flex w-full flex-col items-center gap-8 pb-5 dark:text-brand-secondary lg:pb-10">
      <p className="text-center text-xl font-bold md:text-2xl lg:text-3xl">
        Projects
      </p>

      <ul className="grid grid-cols-2 gap-6 p-3 lg:grid-cols-3 lg:p-0">
        <ProjectItem
          image="natours.png"
          name="Natours"
          link="https://github.com/m3tal10/Natours"
        />
        <ProjectItem
          image="worldwise.png"
          name="WorldWise"
          link="https://github.com/m3tal10/worldwise"
        />
        <ProjectItem
          image="wildoasis.png"
          name="Wild Oasis"
          link="https://github.com/m3tal10/the-wild-oasis"
        />
        <ProjectItem
          image="fast-pizza.png"
          name="Fast Pizza"
          link="https://github.com/m3tal10/fast-pizza"
        />
        <ProjectItem
          image="snake.png"
          name="Snake Game"
          link="https://github.com/m3tal10/snake-game"
        />
        <ProjectItem
          image="turtle-road-cross.png"
          name="Turtle Cross"
          link="https://github.com/m3tal10/turtle-crossing-road"
        />
      </ul>
    </main>
  );
}

export default projects;
