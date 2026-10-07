import { notFound } from "next/navigation";
import { getProjectById, projects } from "../../data/projects";
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

  const index = projects.findIndex((item) => item.id === project.id);
  const toLink = (item?: (typeof projects)[number]) =>
    item ? { id: item.id, title: item.title } : null;

  return (
    <ProjectDetailClient
      project={project}
      prev={toLink(projects[index - 1])}
      next={toLink(projects[index + 1])}
    />
  );
}