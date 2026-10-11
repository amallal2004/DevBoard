import NoteList from "@/components/project/noteList";
import TaskList from "@/components/project/taskList";
import ProjectHeader from "@/components/projectHeader";

const tasks = [{
    id: 1,
    name: "Initiate Project",
    status: "pending"
}, {
    id: 2,
    name: "Define Project Scope",
    status: "completed"
}, {
    id: 3,
    name: "Set Up Development Environment",
    status: "pending"
}, {
    id: 4,
    name: "Create Project Roadmap",
    status: "pending"
}, {
    id: 5,
    name: "Assign Tasks to Team Members",
    status: "pending"
}, {
    id: 6,
    name: "Plan Milestones",
    status: "pending"
}, {
    id: 7,
    name: "Set Up Project Management Tools",
    status: "pending"
}, {
    id: 8,
    name: "Conduct Team Kickoff Meeting",
    status: "pending"
}, {
    id: 9,
    name: "Define Communication Protocols",
    status: "pending"
}, {
    id: 10,
    name: "Setup Version Control",
    status: "pending"
}]

const notes = [{
    id: 1,
    title: "Ship the auth flow before Friday's demo",
    description: "Password reset and Google sign-in are still stubs. Wire them up, then test the redirect callback on a real domain — localhost hides the cookie bug we hit last sprint."
}, {
    id: 2,
    title: "Replace the seed data",
    description: "Current fixtures point at a staging database that gets wiped on every deploy."
}, {
    id: 3,
    title: "Accessibility pass on the task list",
    description: "Screen reader users can't tell which checkbox has focus because the custom span removes the focus ring. Add focus-visible styles and check the strikethrough state has enough contrast against the gray background."
}, {
    id: 4,
    title: "Dark mode",
    description: "Blue accents on dark surfaces, no pure black."
}, {
    id: 5,
    title: "Board columns should remember scroll position",
    description: "Short note."
}, {
    id: 6,
    title: "Move the kanban to a virtualized list",
    description: "Rendering stalls past roughly 200 cards because every task mounts its edit and delete icons. Virtualize the column body, but keep the header outside the scroller so the search box stays put."
}, {
    id: 7,
    title: "Ask design about Supercalifragilisticexpialidociousantidisestablishmentarianism",
    description: "Long unbroken token, to check the card wraps instead of blowing out the layout."
}, {
    id: 8,
    title: "Deploy on merge 🎉",
    description: "Preview builds for every PR, production on merge to main."
}, {
    id: 9,
    title: "",
    description: "Note 9 has no title yet — check the spacing still holds."
}, {
    id: 10,
    title: "Write the onboarding doc",
    description: "Cover local setup, the Supabase project, seeding, and how to run the test suite."
}]

export default function ProjectPage() {
    const completedTasks = tasks.filter(task => task.status === "completed").length
    const pendingTasks = tasks.filter(task => task.status === "pending").length

    return (
        <>
            <ProjectHeader
                title="Developer Dashboard"
                description="A project management dashboard for developers to track their progress and manage their tasks."
            />
            <div className="flex items-start w-full">
                <TaskList pendingTasks={pendingTasks} completedTasks={completedTasks} tasks={tasks} />
                <NoteList notes={notes} />
            </div>
        </>
    )
}