import "./App.css";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import PreviewSection from "./components/PreviewSection";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <section>
          {/* <!-- Input Data --> */}
          <InputSection />
          {/* <!-- Preview Data --> */}
          <PreviewSection />
        </section>
      </div>
    </Provider>
  );
}

export default App;
