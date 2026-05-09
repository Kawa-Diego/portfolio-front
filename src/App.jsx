import Contact from './_sections/footer/Contact'

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
