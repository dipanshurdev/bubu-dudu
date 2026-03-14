import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DubuCry, Sorries } from "./support";
import Footer from "./components/Footer";
import Button from "./components/Button";
import NameInput from "./components/NameInput";
import Celebration from "./components/Celebration";

function App() {  const mySlides = [
    "I'm so sorry, please forgive me 🥺",
    "I miss our talks so much...",
    "Sending you 1000 hugs to Indonesia! 🇮🇩",
    "I promise to be better, please? ❤️",
    "Last chance... say Yes? ✨"
  ];
                
  const [isForgiving, setIsForgiving] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [sorryIndex, setSorryIndex] = useState(0);
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [name, setName] = useState("");
  const [showCelebration, setShowCelebration] = useState(false);

  const handleNo = () => {
    if (!isForgiving) {
      setImageIndex((prev) => (prev + 1) % DubuCry.length);
      setSorryIndex((prev) => (prev + 1) % Sorries.length);
      setYesButtonSize((prev) => Math.min(prev + 0.5, 5));
    }
  };

  const handleYes = () => {
    setIsForgiving(true);
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 5000);
  };

  return (
    <div className="min-h-screen w-full p-4 flex flex-col justify-between bg-gradient-to-b from-blue-900 to-sky-900">
      <main className="flex-grow flex flex-col items-center justify-center">
        {!name && <NameInput setName={setName} />}

        {name && (
          <>
            <motion.div
              className="gif-container mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <img
                src={
                  isForgiving ? "/gifs/maangoi-bubu.gif" : DubuCry[imageIndex]
                }
                alt={isForgiving ? "Bubu happy" : `${name} crying`}
                className="h-80 w-80 object-contain rounded-2xl shadow-lg"
              />
            </motion.div>

            <AnimatePresence>
              {!isForgiving && (
                <motion.div
                  className="text-center mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    please forgive me, {name}
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                   <p className="text-lg text-gray-600 dark:text-gray-400"> {mySlides[sorryIndex % mySlides.length]} </p>
                      🥺🥺
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {!isForgiving && (
              <div className="flex flex-col items-center gap-4">
                <Button
                  onClick={handleYes}
                  className="bg-green-500 hover:bg-green-600"
                  style={{ fontSize: `${yesButtonSize}rem` }}
                >
                  Aww, Yes 🥰
                </Button>
                <Button
                  onClick={handleNo}
                  className="bg-red-500 hover:bg-red-600"
                >
                  {Sorries[sorryIndex]}
                </Button>
              </div>
            )}

            {isForgiving && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-sky-500  mb-4">
                 Yay! I love you so much ,
                  <span className="text-pink-500"> {name}! ❤️</span>
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  I promise to be a better Bubu!
                </p>
              </motion.div>
            )}
          </>
        )}

        {showCelebration && <Celebration />}
      </main>

      <Footer isForgiving={isForgiving} />
    </div>
  );
}

export default App;
