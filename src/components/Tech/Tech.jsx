import TechItem from "./TechItem";
import rea from "../../assets/logos/react.png";
import flask from "../../assets/logos/flask.png";
import git from "../../assets/logos/git.png";
import github from "../../assets/logos/github.png";
import sql from "../../assets/logos/mysql.png";
import tailwind from "../../assets/logos/tailwindcss.png";
import bash from "../../assets/logos/bash.png";
import docker from "../../assets/logos/docker.png";

function Tech() {
  const tech = [
    {
      id: "t1",
      title: "React",
      image: rea,
    },
    {
      id: "t2",
      title: "Github",
      image: github,
    },
    {
      id: "t3",
      title: "Git",
      image: git,
    },
    {
      id: "t4",
      title: "MySQL",
      image: sql,
    },
    {
      id: "t5",
      title: "Tailwind CSS",
      image: tailwind,
    },
    {
      id: "t6",
      title: "Bash",
      image: bash,
    },
    {
      id: "t7",
      title: "Docker",
      image: docker,
    },
    {
      id: "t8",
      title: "Flask",
      image: flask,
    },
  ];

  return (
    <div
      name="tech"
      className="flex flex-col pb-24 pt-10 px-5 md:px-24 lg:px-36 xl:px-60"
    >
      <div>
        <h1 className="text-3xl font-semibold drop-shadow-md">
          What I Work With
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {tech.map((element) => {
          return <TechItem title={element.title} image={element.image} />;
        })}
      </div>
    </div>
  );
}

export default Tech;
