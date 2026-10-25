import React from 'react'
import ChildB from "./ChildB"

// const ChildA = ({ CountValue, updateCount }) => {
//     console.log("This is Child A")
//     return (
//         <>
//             <div style={{ background: "lightblue", margin: "10px", padding: "10px" }}>
//                 <div style={{ display: "flex", justifyContent: "center", paddingBottom: "40px" }}>This is Child A</div>
//                 <ChildB CountValue={CountValue} updateCount={updateCount} />
//             </div>
//         </>
//     )
// }

const ChildA = () => {
    console.log("This is Child A")
    return (
        <>
            <div style={{ background: "lightblue", margin: "10px", padding: "10px" }}>
                <div style={{ display: "flex", justifyContent: "center", paddingBottom: "40px" }}>This is Child A</div>
                <ChildB />
            </div>
        </>
    )
}

export default ChildA