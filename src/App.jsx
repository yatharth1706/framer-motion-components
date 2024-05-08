import "./App.css";
import DraggableDiv from "./framer-components/DraggableDiv";
import EmojisAnimation from "./framer-components/EmojisAnimation";
import ExitAndEnterAnimation from "./framer-components/ExitAndEnterAnimation";
import ProgressBar from "./framer-components/ProgressBar";
import FeedbackPopover from "./framer-components/FeedbackPopover";

function App() {
  return (
    <>
      <div className="p-10 flex flex-col">
        <h1 className="text-center text-4xl font-semibold">
          Framer motion components
        </h1>
        <div className="grid grid-cols-3 mt-20 gap-10 p-10">
          <div className="w-full h-auto text-center">
            <h3 className="text-xl">Draggable Div</h3>
            <DraggableDiv />
          </div>
          <div className="w-full h-auto text-center">
            <h3 className="text-xl">Emojis Animation</h3>
            <EmojisAnimation />
          </div>
          <div className="w-full h-auto text-center">
            <h3 className="text-xl">Exit and Enter Animation</h3>
            <ExitAndEnterAnimation />
          </div>
          <div className="w-full h-auto text-center pt-10">
            <h3 className="text-xl">Gesture Button</h3>
            <ProgressBar />
          </div>
          <div className="w-full h-auto text-center pt-10">
            {/* <h3 className="text-xl">Feedback Popover</h3> */}
            {/* <FeedbackPopover /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
