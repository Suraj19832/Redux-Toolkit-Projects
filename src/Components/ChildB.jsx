import React from 'react'
import ChildC from './ChildC'

// const ChildB = ({ CountValue, updateCount }) => {
//     console.log("This is Child B");
//     return (
//         <>
//             <div style={{ background: "lightgreen", margin: "10px", padding: "10px" }}>
//                 <div style={{ display: "flex", justifyContent: "center", paddingBottom: "40px" }}>This is Child B</div>
//                 <ChildC CountValue={CountValue} updateCount={updateCount} />
//             </div>
//         </>
//     )
// }
const ChildB = () => {
    console.log("This is Child B");
    return (
        <>
            <div style={{ background: "lightgreen", margin: "10px", padding: "10px" }}>
                <div style={{ display: "flex", justifyContent: "center", paddingBottom: "40px" }}>This is Child B</div>
                <ChildC />
            </div>
        </>
    )
}

export default ChildB