import Statastics from "@/components/statastics"
import ProjectDashboard from "@/components/projectDashboard";
import NewProjectForm from "@/components/newProjectForm";

export default function Home() {
  return (
    <div className="relative">
      <Statastics />
      <ProjectDashboard />
    </div>
  );
}
