import Hero from "./_sections/Hero";
import Contact from "./_sections/footer/Contact";
import Navbar from "./_components/Navbar";
import About from "./_sections/About";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Contact />
    </main>
  );
};

export default App;
