import Form from '../components/ContactForm';
import Header from '../components/Header';

export default function Contact() {
  return (
    <main className="flex flex-col h-screen">
      <div className="sticky top-0 sm:top-2 w-full ">
        <Header className=" " />
      </div>
      <Form />
    </main>
  );
}
