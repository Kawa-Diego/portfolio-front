import Hero from "./_sections/Hero";
import Contact from "./_sections/footer/Contact";
import Navbar from "./_components/Navbar";
import About from "./_sections/About";
import Loading from "./_components/Loading";

const App = () => {
  return (
    <>
      <Loading /> 
      <main className="app-main">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      </main>
    </>
  );
};

export default App;
