import React, { createContext, useState } from 'react'
import ChildA from "./ChildA";

const homeCount = createContext();

const Home = () => {
    const [count, setCount] = useState(0);
    const name = "Suraj Burman";
    const handleCount = () => {
        setCount(count + 1)
    }
    return (
        <>
            {/* <div style={{ background: "pink", margin: "10px", padding: "10px" }}>
                <div style={{ display: "flex", justifyContent: "center", paddingBottom: "40px" }}>This is Home Page</div>
                <button onClick={handleCount}>Increse</button>
                <ChildA CountValue={count} updateCount={setCount} />
            </div> */}
            <homeCount.Provider value={count}>
                <div style={{ background: "pink", margin: "10px", padding: "10px" }}>
                    <div style={{ display: "flex", justifyContent: "center", paddingBottom: "40px" }}>This is Home Page</div>
                    <button onClick={handleCount}>Increse</button>
                    <ChildA />
                </div>
            </homeCount.Provider>
        </>
    )
}

export default Home;
export { homeCount }