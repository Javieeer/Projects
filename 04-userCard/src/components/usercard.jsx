const UserCard = ({ nombre, email, description } ) => {
    const image = `https://unavatar.io/readcv/${nombre}`
    return (
        <section className="userCard">
            <section className="userCard-picture">
                <img src={image} alt="" />
            </section>
            <section className="userCard-details">
                <h4 className="userCard-details-nombre">{nombre}</h4>
                <p className="userCard-details-email">{email}</p>
                <p className="userCard-details-description">{description}</p>
            </section>
        </section>
    )
}

export default UserCard