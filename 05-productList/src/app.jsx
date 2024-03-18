import './app.css'

const Product = ({ name, price }) => {
    return (
        <div className="productList-body-product">
            <img src={`https://unavatar.io/${name}`} alt="" />
            <h4>{name}</h4>
            <p>{`$${price} AUD`}</p>
        </div>
    )
}

const App = () => {
    return (
        <main className="productList">
            <header className="productList-Header">
                <h1>Product List</h1>
            </header>
            <section className="productList-body">
                <Product 
                    name = 'Computador'
                    price = '125'
                />
                <Product 
                    name = 'Celular'
                    price = '155'
                />
                <Product 
                    name = 'Fotocopia'
                    price = '15'
                />
            </section>
        </main>
    )
}

export default App