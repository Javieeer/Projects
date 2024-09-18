function ShowTrolley({ cartCount }) {

    const imgTrolley = 'https://cdn-icons-png.flaticon.com/512/3770/3770807.png'

    return (
        <div className="shopping-trolley">
            <div>
                <img src={imgTrolley} alt="" />
                {cartCount > 0 && 
                    <div className="cart-count">
                        {cartCount}
                    </div>
                }
            </div>
        </div>
    )
}

export default ShowTrolley