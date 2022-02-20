import productData from "./components/ProductData";
import Product from "./components/Product";
import PriceList from "./components/PriceList";
import AddProduct from "./components/AddProduct";
import { useState } from "react";

function App() {

  const [productList, setProductList] = useState(productData)
  const subtotal = Object.values(productList).reduce((a, { price, quantity }) => a + price * quantity, 0)

  function handleIncrease(id) {
    setProductList(productList.map(item => {
      return (item.id === id) ? { ...item, quantity: item.quantity + 1 } : item
    }))
  }

  function handleDecrease(id) {
    setProductList(productList.map(item => {
      if (item.id === id) {
        if (item.quantity === 1) return { ...item, isDisplayed: false, quantity: item.quantity - 1 }
        else if (item.quantity === 0) return { ...item, isDisplayed: false }
        else return { ...item, quantity: item.quantity - 1 }
      }
      return item
    }
    ))
  }

  function handleRemove(id) {
    setProductList(productList.map(item =>
      item.id === id ? { ...item, isDisplayed: false, quantity: 0 } : item
    ))
  }

  function handleAddProduct(id) {
    setProductList(productList.map(item => {
      if (item.quantity === 0) return item.id === id ? { ...item, isDisplayed: true, quantity: 1 } : item
      return item.id === id ? { ...item, isDisplayed: true } : item
    }))
  }

  return (
    <main>
      <h1>Checkout</h1>
      <div className="product-panel">
        <AddProduct addProduct={handleAddProduct} />
        {productList.map(item => {
          return item.isDisplayed && (
            <Product
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              oldPrice={item.oldPrice}
              quantity={item.quantity}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
              handleRemove={handleRemove}
            />)
        })}
        <PriceList
          value={subtotal}
        />
      </div>
    </main>
  );
}

export default App;
