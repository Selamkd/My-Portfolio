import Form from '../components/ContactForm';
import Header from '../components/Header';

export default function Contact() {
  return (
    <main className="flex flex-col h-screen">
      <Header className="top-0  absolute" />
      <Form />
    </main>
  );
}
