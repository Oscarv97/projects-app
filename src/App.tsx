import Header from "./components/header/header";
import ProjectsTable from "./pages/projects";

function App() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-gray-100">
      <Header />
      <section className="w-full max-w-6xl px-4 py-10 mt-32">
        <ProjectsTable />
      </section>
    </main>
  );
}

export default App;