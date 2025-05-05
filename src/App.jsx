import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Box from "./Box";

const App = () => {
  return (
    <>
      <Header name="Ugorji Chibuzor" />
      <main>
        <h1>REACT DEMO APP</h1>
        <div className="boxes">
          <Box fullName="Ugorji Chibuzor" title="CEO" age="25" myAnimal="fox" />
          <Box
            fullName="Aino Virtanen"
            title="Developer"
            age="45"
            myAnimal="bear"
          />
          <Box
            fullName="Mikko Laine"
            title="Designer"
            age="32"
            myAnimal="wolf"
          />
          <Box
            fullName="Sanna Korhonen"
            title="Developer"
            age="38"
            myAnimal="cat"
          />
          <Box
            fullName="Jari Nieminen"
            title="Designer"
            age="29"
            myAnimal="deer"
          />
          <Box
            fullName="Emilia Salmi"
            title="Developer"
            age="41"
            myAnimal="dog"
          />
        </div>
      </main>
      <Footer year={2025} />
    </>
  );
};

export default App;
