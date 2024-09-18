function Product({ name, price, onClick }) {

    return (
        <div className="productList-body-product">
            <img src={`https://unavatar.io/${name}`} alt="" />
            <h4>{name}</h4>
            <p>{`$${price} AUD`}</p>
            <button onClick={() => onClick({ name, price })}>Agregar al carrito</button>
        </div>
    )
}

export default Product