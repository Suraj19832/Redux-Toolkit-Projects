import React from 'react'
import { homeCount } from './Home';
// const ChildC = ({ CountValue, updateCount }) => {
//     console.log("This is Child C");
//     const handleIncrese = () => {
//         updateCount(prev => prev + 1);
//     }

//     const handleDecrese = () => {
//         updateCount(prev => prev - 1);
//     }
//     return (
//         <div style={{ background: "lightyellow", margin: "10px", padding: "10px" }}>
//             <div style={{ display: "flex", justifyContent: "center", paddingBottom: "40px" }}>This is Child C</div>
//             <button onClick={handleIncrese}>Increse</button>
//             <button onClick={handleDecrese}>Decrese</button>
//             <h3>The Count is. : {CountValue}</h3>
//         </div>
//     )
// }
const ChildC = () => {
    console.log("This is Child C");
    const handleIncrese = () => {
        updateCount(prev => prev + 1);
    }

    const handleDecrese = () => {
        updateCount(prev => prev - 1);
    }
    return (
        <homeCount.Consumer>
            {(count) => {
                return (
                    <div style={{ background: "lightyellow", margin: "10px", padding: "10px" }}>
                        <div style={{ display: "flex", justifyContent: "center", paddingBottom: "40px" }}>This is Child C</div>
                        <button onClick={handleIncrese}>Increse</button>
                        <button onClick={handleDecrese}>Decrese</button>
                        <h3>The Count is. : {count}</h3>
                    </div>
                )
            }}
        </homeCount.Consumer>
    )
}

export default ChildC