import { useEffect, useState } from "react";

import "./index.css";
import { DubuCry, Sorries } from "./support";

function App() {
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
      <div className="h-screen  w-full p-4">
        <div className="flex items-center justify-center w-full flex-col ">
          <div className="gif-center flex flex-col items-center justify-center mt-10">
            <img
              src={
                yes
                  ? // ? "https://c.tenor.com/gH6QB8igGn0AAAAC/tenor.gif"
                    "/gifs/maangoi-bubu.gif"
                  : DubuCry[index]
              }
              alt="dudu-crying"
              className="h-80 w-80 object-contain rounded-2xl"
            />
            {!yes && (
              <div className="flex flex-col justify-center items-center text-center">
                <h1 className="mt-2 text-gray-600 font-semibold text-xl">
                  Please mujhe chhama🙇‍♂️ kardo na 🥺🥺.
                </h1>
                <span className=" text-gray-600 font-normal text-base">
                  Tum hi galat sochti ho😑, aur serious ho jati ho.
                </span>
                <span className=" text-gray-600 font-semibold text-lg">
                  Per Fir bhi🥺
                </span>
                <big className="text-gray-600 font-semibold text-lg">Sorry</big>
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
                Thik hai ji🥰
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
      </div>
    </>
  );
}

export default App;
