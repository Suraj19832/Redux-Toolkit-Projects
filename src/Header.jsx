import { useSelector } from "react-redux";

function Header({ cartCount }) {
    const selector = useSelector((state) => state.addsCart.value);
    console.log(selector, "???")
    return (
        <header style={styles.header}>
            <h2>🛍️ MyStore</h2>
            <h3>🛒 Cart ({selector})</h3>
        </header>
    );
}

const styles = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#222",
        color: "white",
    },
};

export default Header;