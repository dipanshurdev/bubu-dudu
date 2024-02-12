import { useEffect, useState } from "react";

import "./index.css";
import { DubuCry, Sorries } from "./support";

function App() {
  // States
  const [yes, setYes] = useState(false);
  const [index, setIndex] = useState(0);
  const [sorryIdx, setSorryIdx] = useState(0);
  const [widthPrsnt, setWidthPrsnt] = useState(1);

  const saidNo = () => {
    if (!yes) {
      setIndex(index + 1);
      setSorryIdx(sorryIdx + 1);
      setWidthPrsnt(widthPrsnt + 1);
    }
  };

  useEffect(() => {
    if (index >= DubuCry.length) {
      setIndex(0);
    }
    if (sorryIdx >= Sorries.length) {
      setSorryIdx(0);
    }
  }, [index, sorryIdx]);

  return (
    <>
      <div className="h-screen  w-full p-4 flex items-center justify-between flex-col">
        <div className="flex items-center justify-center w-full flex-col ">
          <div className="gif-center flex flex-col items-center justify-center mt-10">
            <img
              src={yes ? "/gifs/maangoi-bubu.gif" : DubuCry[index]}
              alt="dudu-crying"
              className="h-80 w-80 object-contain rounded-2xl"
            />
            {!yes && (
              <div className="flex flex-col justify-center items-center text-center">
                <big className="mt-2 text-gray-600 font-semibold text-xl">
                  Sorry
                </big>
                <h1 className=" text-gray-600 font-semibold text-lg">
                  Please forgive me🥺🥺.
                </h1>
              </div>
            )}
          </div>
          {!yes && (
            <div className="w-full flex items-center justify-center mt-2 flex-col gap-2">
              <button
                onClick={() => setYes(true)}
                className="px-3 py-2 bg-blue-400 rounded-xl text-white w-30"
                id="yess"
                style={{ fontSize: `${widthPrsnt}rem` }}
              >
                Aww, Yes🥰
              </button>
              <button
                onClick={() => saidNo()}
                className="px-3 py-2 bg-red-400 rounded-xl text-white w-30"
              >
                {Sorries[sorryIdx]}
              </button>
            </div>
          )}
        </div>
        <footer className="w-full p-4 mt-24">
          {yes && (
            <div className="flex items-center justify-center">
              <p className="text-slate-700 text-lg font-bold capitalize">
                built by{" "}
                <a
                  className="text-blue-400"
                  href="https://github.com/amanr-dev"
                  target="_blank"
                >
                  Aman Rawat🙂
                </a>
              </p>
            </div>
          )}
        </footer>
      </div>
    </>
  );
}

export default App;
