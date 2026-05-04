import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pages from "./layouts/Pages";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="page-content">
        <Pages />
      </main>
      <Footer />
    </>
  );
}

export default App;