
export function ShowUsers({ userData, setSelectedUser }) {
    return (
        <>
            {userData.map((user, index) => (
                <div className="userCard" key={index} onClick={() => {
                    setSelectedUser(user)
                }}>
                    <section className="userCard-picture">
                        <img src={user.picture.large} alt="Person Image" />
                    </section>
                    <section className="userCard-basicDetails">
                        <strong>Name: </strong>
                        <p>{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
    
                        <strong>Age: </strong>
                        <p>{user.dob.age}</p>
                    </section>
                </div>
            ))}
        </>
    )
}

export function UserDetails({selectedUser, setSelectedUser, }) {
    return (
        <>
            {
                selectedUser && (
                    <div className="overlay" onClick={() => setSelectedUser(null)}>
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <section className="userCard-picture">
                                <img src={selectedUser.picture.large} alt="Selected Person" />
                            </section>
                            <section className="userCard-basicDetails">
                                <strong>Name: </strong>
                                <p>{`${selectedUser.name.title} ${selectedUser.name.first} ${selectedUser.name.last}`}</p>
                                
                                <strong>Gender: </strong>
                                <p>{selectedUser.gender}</p>

                                <strong>Age: </strong>
                                <p>{selectedUser.dob.age}</p>

                                <strong>Date of birth: </strong>
                                <p>{selectedUser.dob.date.slice(0,10)}</p>

                                <strong>Email: </strong>
                                <p>{selectedUser.email}</p>

                                <strong>Phone number: </strong>
                                <p>{selectedUser.phone}</p>

                                <strong>Home adress: </strong>
                                <p>{`${selectedUser.location.street.number} ${selectedUser.location.street.name}, ${selectedUser.location.state} ${selectedUser.location.postcode}`}</p>

                                <strong>{`ID: ${selectedUser.id.name}`}</strong>
                                <p>{selectedUser.id.value}</p>

                                <strong>Nationality: </strong>
                                <p>{selectedUser.nat}</p>

                                <strong>Username: </strong>
                                <p>{selectedUser.login.username}</p>
                            </section>
                            <button onClick={() => setSelectedUser(null)}>Close</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}