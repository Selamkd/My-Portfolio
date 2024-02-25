import ProjectsPage from '../components/Projects';
import Header from '../components/Header';
export default function Projects() {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <ProjectsPage/>
    </main>
  );
}
