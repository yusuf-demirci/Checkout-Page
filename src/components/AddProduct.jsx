
function AddProduct({ addProduct }) {
    return (
        <div className="add-product">
            <p className="add-product-item">
                Vintage Backpag
                <label onClick={() => { addProduct(1) }} className="plus">+</label>
            </p>
            <p className="add-product-item">
                Levi Shoes
                <label onClick={() => { addProduct(2) }} className="plus">+</label>
            </p>
            <p className="add-product-item">
                Antique Clock
                <label onClick={() => { addProduct(3) }} className="plus">+</label>
            </p>
        </div>
    )
}

export default AddProduct