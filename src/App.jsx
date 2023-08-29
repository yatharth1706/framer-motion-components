import "./App.css";
import ToggleBar from "./framer-components/ToggleBar";

function App() {
  return (
    <>
      <div className="p-10 flex flex-col">
        <h2 className="text-xl font-normal">Framer Components</h2>

        <main className="flex space-x-4 py-6">
          <ToggleBar />
        </main>
      </div>
    </>
  );
}

export default App;
