

function TotalPriceItems({title, price}) {
    return (
        <>
            <hr />
            <p className="pricing">
                <span className="pricing-text">{title}</span>
                <span className="pricing-total">${price}</span>
            </p>
        </>
    )
}

export default TotalPriceItems