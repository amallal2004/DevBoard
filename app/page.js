import Statastics from "@/components/statastics"
import ProjectDashboard from "@/components/projectDashboard";

export default function Home() {
  return (
    <div className="relative">
      <Statastics />
      <ProjectDashboard />
    </div>
  );
}
