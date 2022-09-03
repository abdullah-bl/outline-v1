import { useParams } from "@remix-run/react";

export default function Project() {
  const { projectId } = useParams();
  return (
    <div className="container mx-auto">
      <h1 className="font-mono text-3xl font-bold text-blue-900">
        Project {projectId}
      </h1>
    </div>
  );
}
