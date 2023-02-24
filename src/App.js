import "./App.css";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import PreviewSection from "./components/PreviewSection";

function App() {
  return (
    <div className="App">
      <Header />

      <section>
        {/* <!-- Input Data --> */}
        <InputSection />
        {/* <!-- Preview Data --> */}
        <PreviewSection />
      </section>
    </div>
  );
}

export default App;
