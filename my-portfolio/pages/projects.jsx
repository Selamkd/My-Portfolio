import ProjectsPage from '../components/Projects';
import Header from '../components/Header';
export default function Projects() {
  return (
    <main className="flex flex-col h-screen">
      <div className="fixed top-2 z-20 align-center ml-15">
        <Header />
      </div>

      <ProjectsPage />
    </main>
  );
}
