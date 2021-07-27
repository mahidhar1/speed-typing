import React, { useState, useEffect, useRef } from "react";
import useWordGame from "./hooks/useWordGame";

function App() {
  const {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  } = useWordGame(30);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <div className="randomText">
        <p>
          Now is the winter of our discontent Made glorious summer by this sun
          of York;
        </p>
        <p>
          And all the clouds that lour'd upon our house In the deep bosom of the
          ocean buried. Now are our brows bound with victorious wreaths;
        </p>
        <p>
          Our bruised arms hung up for monuments; Our stern alarums changed to
          merry meetings, Our dreadful marches to delightful measures.
        </p>
        <p>
          Grim-visaged war hath smooth'd his wrinkled front; And now, instead of
          mounting barded steeds To fright the souls of fearful adversaries,
        </p>
        <p>
          He capers nimbly in a lady's chamber To the lascivious pleasing of a
          lute. But I, that am not shaped for sportive tricks, Nor made to court
          an amorous looking-glass;
        </p>
        <p>
          I, that am rudely stamp'd, and want love's majesty To strut before a
          wanton ambling nymph; I, that am curtail'd of this fair proportion,
        </p>
      </div>
      <textarea
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
