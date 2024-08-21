"use client";
import { useRouter } from "next/navigation";
import SingleProject from "@/components/Projects/singleProject";
import ProjectData from "@/components/Projects/projectData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Projects = () => {
  const router = useRouter();

  const handleProjectClick = (id) => {
    // Navigate to the dynamic route using the project's id
    router.push(`/project/${id}`);
  };

  return (
    <>
      <Breadcrumb
        pageName="Projects Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {ProjectData.map((project) => (
              <div
                key={project.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                onClick={() => handleProjectClick(project.id)} // Add onClick to navigate
                style={{ cursor: "pointer" }} // Optional: add cursor pointer style
              >
                <SingleProject project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
