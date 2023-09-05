import "./App.css";
import ExitAndEnterAnimation from "./framer-components/ExitAndEnterAnimation";
import ProgressBar from "./framer-components/ProgressBar";

function App() {
  return (
    <>
      <div className="p-10 flex flex-col">
        <h1 className="text-center text-4xl font-semibold">
          Framer motion components
        </h1>
        {/* <ProgressBar /> */}
        <ExitAndEnterAnimation />
      </div>
    </>
  );
}

export default App;
