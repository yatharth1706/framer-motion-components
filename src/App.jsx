import "./App.css";
import DraggableDiv from "./framer-components/DraggableDiv";
import ExitAndEnterAnimation from "./framer-components/ExitAndEnterAnimation";
import GestureButton from "./framer-components/GestureButton";
import ProgressBar from "./framer-components/ProgressBar";

function App() {
  return (
    <>
      <div className="p-10 flex flex-col">
        <h1 className="text-center text-4xl font-semibold">
          Framer motion components
        </h1>
        {/* <ProgressBar /> */}
        {/* <ExitAndEnterAnimation />

        <GestureButton /> */}

        <DraggableDiv />
      </div>
    </>
  );
}

export default App;
