function Cart({ cartItems }) {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map((item, index) => (
                    <p key={`${item.id}-${index}`}>
                        {item.name} - ₹{item.price}
                    </p>
                ))
            )}

            <h3>
                Total: ₹
                {cartItems.reduce((total, item) => total + item.price, 0)}
            </h3>
        </div>
    );
}

export default Cart;