import React from 'react';
import Possibility from "./components/Possibility";
import StartProfession from "./components/StartProfession";
import AmountOfTraining from "./components/AmountOfTraining";
import Instruction from "./components/Instruction";

function App() {
    return (
        <>
            <StartProfession />
            <AmountOfTraining />
            <Instruction />
            <Possibility />
        </>
    );
}

export default App;
