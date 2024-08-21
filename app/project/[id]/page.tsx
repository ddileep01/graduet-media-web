"use client";
import { useParams } from "next/navigation";
import DetailedProject from "@/components/Projects/detailedProject";
import ProjectData from "@/components/Projects/projectData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const ProjectDetails = () => {
  const params = useParams();
  const id = params?.id;

  // Ensure 'id' is treated as a string
  const projectId = Array.isArray(id) ? id[0] : id;

  // Find the project that matches the id from the URL
  const project = ProjectData.find(
    (proj) => proj.id === parseInt(projectId || "")
  );

  // Handle the case where the project isn't found
  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <>
      <Breadcrumb
        pageName={`project ${project.id} detailed View `}
        description={`Viewing project "${project.title}"`}
      />
      <div className="container">
        <DetailedProject project={project} />
      </div>
    </>
  );
};

export default ProjectDetails;
