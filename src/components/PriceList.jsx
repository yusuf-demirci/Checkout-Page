import TotalPriceItems from "./TotalPriceItems"

function PriceList(props) {

  const value = +props.value.toFixed(2)
  const tax = +(props.value * 18 / 100).toFixed(2)
  const shipping = props.value ? 15 : 0
  const total = (value + tax + shipping).toFixed(2)

  return (
    <div className="price-list">
        <TotalPriceItems title={"Subtotal"} price={value} />
        <TotalPriceItems title={"Tax(%18)"} price={tax} />
        <TotalPriceItems title={"Shipping"} price={shipping} />
        <TotalPriceItems title={"Total"} price={total} />
    </div>
  )
}

export default PriceList