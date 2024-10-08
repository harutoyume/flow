import Head from "next/head";
import AppNavigation from "@/components/App/AppNavigation";
import EventsElement from "@/components/Events/EventsElement";
import TasksElement from "@/components/Tasks/TasksElement";
import AppFooter from "@/components/App/AppFooter";
import NotesElement from "@/components/Notes/NotesElement";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Flow Organizer</title>
      </Head>
      <div className="relative min-h-screen">
        <header>
          <AppNavigation />
        </header>
        <main className="px-4 py-24 flex flex-col gap-y-4">
          <NotesElement />
          <div className="w-full flex flex-row justify-between gap-4 max-sm:flex-col">
            <div className="w-full">
              <TasksElement />
            </div>
            <div className="w-full">
              <EventsElement />
            </div>
          </div>
        </main>
        <AppFooter />
      </div>
    </>
  );
}
