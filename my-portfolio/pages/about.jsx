import Intro from '../components/Intro';
import Header from '../components/Header';
export default function About() {
  return (
    <main className="flex flex-col h-screen">
      <div className="sticky w-full ">
        <Header className=" " />
      </div>

      <Intro />
    </main>
  );
}
