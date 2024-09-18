import Product from './components/product.jsx'
import ShowTrolley from './components/trolley.jsx'
import './app.css'
import { useEffect, useState } from 'react'

function App() {

    const [cartCount, setCartCount] = useState(0);
    const [itemsInTrolley, setItemsInTrolley] = useState([])

    useEffect(() => {
        console.log(itemsInTrolley)
    }, [itemsInTrolley])

    const handleClickProduct = (name, price) => {
        setItemsInTrolley(prevItemsInTrolley => [... prevItemsInTrolley, {name, price}])
        setCartCount(cartCount + 1);
    }

    return (
        <main>
            <header>
                <h1>Web page with shopping trolley</h1>
            </header>
            <section className="shopping">
                <ShowTrolley cartCount={cartCount}/>
                <section className="productList-body">
                    <Product name = 'chair' price = '125' onClick={handleClickProduct} />
                    <Product name = 'phone' price = '155' onClick={handleClickProduct} />
                    <Product name = 'desk' price = '15' onClick={handleClickProduct} />
                    <Product name = 'Laptop' price = '125' onClick={handleClickProduct} />
                    <Product name = 'sisors' price = '155' onClick={handleClickProduct} />
                    <Product name = 'engine' price = '15' onClick={handleClickProduct} />
                    <Product name = 'agend' price = '125' onClick={handleClickProduct} />
                    <Product name = 'bag' price = '155' onClick={handleClickProduct} />
                    <Product name = 'mirror' price = '15' onClick={handleClickProduct} />
                    <Product name = 'cup' price = '125' onClick={handleClickProduct} />
                    <Product name = 'pen' price = '155' onClick={handleClickProduct} />
                    <Product name = 'soup' price = '15' onClick={handleClickProduct} />
                </section>
            </section>
        </main>
    )
}

export default App