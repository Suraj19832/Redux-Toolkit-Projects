// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Components/Home";
// import Music from "./Components/Music";
// import All from "./Components/All";
// import Javascript from "./Components/Javascript";


// function App() {
//     return (
//         // <BrowserRouter>
//         //     <Routes>
//         //         <Route path="/" element={<Home />} />
//         //         <Route path="/music" element={<Music />} />
//         //         <Route path="/javascript" element={<Javascript />} />
//         //         <Route path="/all" element={<All />} />
//         //     </Routes>
//         // </BrowserRouter>
//         <div>hello</div>
//     )
// }

// export default App;

import { useState } from "react";
import Header from "./Header";
import Product from "./Product";
import Cart from "./Cart";
import { clearAllItem } from "./Redux-Toolkit/Slice";
import { useDispatch } from "react-redux";

function App() {
    const [cartItems, setCartItems] = useState([]);
    const dispatch = useDispatch();
    const products = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Mobile", price: 20000 },
        { id: 3, name: "Headphones", price: 2000 },
    ];

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    return (
        <div>
            <Header cartCount={cartItems.length} />

            <h2 style={{ paddingLeft: "20px" }}>Our Products</h2>
            <button onClick={() => dispatch(clearAllItem())}>Clear Cart</button>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    />
                ))}
            </div>

            <Cart cartItems={cartItems} />
        </div>
    );
}

export default App;