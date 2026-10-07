import { notFound } from "next/navigation";
import { getProjectById, projects } from "../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ projectId: project.id }));
}
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

  const title = `${project.title.ENG} | Tran Ngoc Ha`;
  const description = project.description.ENG;
  const image = encodeURI(project.images[0]);

  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      title,
      description,
      type: "article",
      images: [{ url: image, width: 1200, height: 800, alt: project.title.ENG }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
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