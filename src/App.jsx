import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onOpenHandler = () => {
    setOpenMenu((prev) => !prev); // Alterna el estado correctamente
  };

  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openMenu]);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header open={openMenu} setopenMenu={onOpenHandler} />
      <main>
        <Home />
        <Work hiddenWork={openMenu} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
