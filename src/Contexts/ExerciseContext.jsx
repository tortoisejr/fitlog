"use client";

import { createContext, useState } from "react";

export const ExerciseContext = createContext({});

function ExerciseProvider({ children }) {
  const [planedExer, setPlanedExer] = useState([]);
  const [savedExer, setSavedExer] = useState([]);

  const shareData = {
    planedExer,
    setPlanedExer,
    savedExer,
    setSavedExer,
  };
  return (
    <div>
      <ExerciseContext.Provider value={shareData}>
        {children}
      </ExerciseContext.Provider>
    </div>
  );
}

export default ExerciseProvider;
