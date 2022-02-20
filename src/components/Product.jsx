
function Product(props) {

    const total = (props.price * props.quantity).toFixed(2)

    return (
        <div>
            <div className="product">
                <img className="product-image" src={props.image}></img>
                <div className="product-info">
                    <h3>{props.title}</h3>
                    <p>
                        <strong>${props.price}</strong>
                        <span className="line-through">${props.oldPrice}</span>
                    </p>
                    <div className="quantity-control">
                        <label onClick={() => props.handleDecrease(props.id)} className="minus">-</label>
                        <label className="quantity">{props.quantity}</label>
                        <label onClick={() => props.handleIncrease(props.id)} className="plus">+</label>
                    </div>
                    <button onClick={() => props.handleRemove(props.id)} className="remove">Remove</button>
                    <p className="product-total">Product Total: ${total}</p>
                </div>
            </div>
        </div>
    )
}

export default Product