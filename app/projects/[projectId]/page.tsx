import { notFound } from "next/navigation";
import { getProjectById } from "../../data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

type Props = {
  params: Promise<{
    projectId: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { projectId } = await params;
  const project = getProjectById(projectId);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title.ENG} | Tran Ngoc Ha`,
    description: project.description.ENG,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { projectId } = await params;
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}