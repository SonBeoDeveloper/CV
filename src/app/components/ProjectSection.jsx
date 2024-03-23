"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
const projectData = [
  {
    id: 1,
    title: "Chat message",
    description: "Using nextJS, Pusher, mongoose",
    image: "/images/projects/ChatApp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SonBeoDeveloper/chat",
    previewUrl: "https://chat-clone-zeta.vercel.app/",
  },
  {
    id: 2,
    title: "Demo porfolio",
    description: "Using react, frame motion",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SonBeoDeveloper/portfolio",
    previewUrl: "https://portfolio2-one-kappa.vercel.app/",
  },
  {
    id: 3,
    title: "SonBeo shop",
    description: "Using redux, react",
    image: "/images/projects/shop.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SonBeoDeveloper/shop/tree/main",
    previewUrl: "https://shop-seven-xi.vercel.app/",
  },
];
const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Projects của tôi
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgURL={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
