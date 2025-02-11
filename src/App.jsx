import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Work from './components/Work';
const App = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <Home/>
        <Skills/>
        <Work/>
      </main>
      <Footer/>
    </div>
  );
};
export default App;