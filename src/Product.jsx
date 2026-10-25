import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./Redux-Toolkit/Slice";

function Product({ product, addToCart }) {
    const dispatch = useDispatch();
    return (
        <div style={styles.card}>
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>

            <button onClick={() => dispatch(addItem(1))}>
                Add to Cart
            </button>
            <button onClick={() => dispatch(removeItem())}>
                Remove to Cart
            </button>
        </div>
    );
}

const styles = {
    card: {
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        margin: "15px",
        width: "200px",
    },
};

export default Product;